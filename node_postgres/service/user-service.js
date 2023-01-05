// const UserModel = require('../models/user-model')
const db = require('../db');
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')
// const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto');
const tokenService = require('./token-service');

class UserService{
    async  registration(email, password){
        // const candidate = await db.query('select name from person where name = $1', [email])
        // if (candidate) {
        //     throw new Error('Пользователь уже существует')
        // }
        // const hashpassword = await bcrypt.hash(password, 3)
        // const actovationLink = uuid.v4()
        // const user = await UserModel.create({email, password: hashpassword, actovationLink})
        // await mailService.sendActivationMail(email, actovationLink)
        // const userDto = new UserDto(user)
        // const tokens = tokenService.getTokens({...userDto})
        // await tokenService.saveToken(userDto.id, tokens.refreshToken)

        // return {...tokens, user: userDto}

        const candidate = await db.query('select email from myuser where email = $1', [email])
        if (candidate.rows[0]) {
            throw new Error('Пользователь уже существует')
        }
        const hashpassword = await bcrypt.hash(password, 3)
        const actovationLink = uuid.v4()
        const user = await db.query('insert into myuser (email, pass, activationlink) values ($1, $2, $3) returning *', [email, hashpassword, actovationLink])
        console.log(user.rows[0])
        await mailService.sendActivationMail(email, actovationLink)
        const userDto = new UserDto(user.rows[0])
        console.log(userDto)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }
}

module.exports = new UserService()