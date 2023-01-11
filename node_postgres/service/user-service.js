// const UserModel = require('../models/user-model')
const db = require('../db');
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')
// const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto');
const tokenService = require('./token-service');
const ApiError = require('../exceptions/api-error')

class UserService{
    async  registration(email, password){

        const candidate = await db.query('select email from myuser where email = $1', [email])
        if (candidate.rows[0]) {
            throw ApiError.BadRequestError(`Пользователь с таким email(${email}) уже существует`)
        }
        const hashpassword = await bcrypt.hash(password, 3)
        const actovationLink = uuid.v4()
        const user = await db.query('insert into myuser (email, pass, activationlink) values ($1, $2, $3) returning *', [email, hashpassword, actovationLink])
        await mailService.sendActivationMail(email, `${process.env.API_URL}/activate/${actovationLink}`)
        const userDto = new UserDto(user.rows[0])
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }

    async activate(activationLink) {
        try{
            const user = await db.query('select * from myuser where activationlink=$1', [activationLink])
        if (!user.rows[0]) {
            throw ApiError.BadRequestError('Неккоректная ссылка активации')
        }
        await db.query('UPDATE myuser SET isactivated = $1 where activationlink=$2', [true, activationLink])
      
        }
        catch(e){
            console.log(e)
        }
    }
}

module.exports = new UserService()