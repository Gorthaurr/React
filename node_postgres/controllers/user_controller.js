// const db = require('../db');

// class UserController{
//     async createUser(req, res) {
//         const {name, surname} = req.body
//         const newPerson = await db.query('INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *' , [name, surname])
//         res.json(newPerson.rows[0])
//     }

//     async getUser(req, res) {

//     }
//     async getOneUser(req, res) {

//     }
//     async updateUser(req, res) {

//     }
//     async deleteUser(req, res) {

//     }
 
// }

// module.exports = new UserController()
const db = require('../db');
const userService = require('../service/user-service')
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/api-error')
const tokenService = require('../service/token-service');

class UserController {
    async registration(req, res, next) {
        try{
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequestError('Ошибка валидации', errors.array()))
                
            }
            const {email, password} = req.body;
            const userData = await userService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)
        }
        catch(e){
            next(e);
        }
    }

    async login(req, res, next) {
        try{
            const {email, password} = req.body
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)
        }
        catch(e){
            next(e);
        }
    }

    async logout(req, res, next) {
        try{
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        }
        catch(e){
            next(e);
        }
    }

    async activate(req, res, next) {
        try{    
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
            
        }
        catch(e){
            next(e);
        }
    }

    async refresh(req, res, next) {
        try{
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken)
            console.log(userData)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)
        }
        catch(e){
            next(e);
        }
    }

    async getUsers(req, res, next) {
        try{
            const a = await userService.getAllUsers()
            res.json(a)
        }
        catch(e){
            next(e);
        }
    }

    async test(req, res, next) {
        const email = 'asd'
        const user = await db.query('select * from myuser where email = $1', [email])
        if (!user.rows[0]){
            console.log('1')
           return res.json(user.rows[0])
        }
        return res.json('asdsad')
    }
}

module.exports = new UserController()