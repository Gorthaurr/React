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

class UserController {
    async registration(req, res, next) {
        try{
            const {email, password} = req.body;
            const userData = await userService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)
        }
        catch(e){
            console.log(e)
        }
    }

    async login(req, res, next) {
        try{
            
        }
        catch(e){

        }
    }

    async logout(req, res, next) {
        try{

        }
        catch(e){

        }
    }

    async activate(req, res, next) {
        try{    
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
            
        }
        catch(e){
            console.log(e)
        }
    }

    async refresh(req, res, next) {
        try{

        }
        catch(e){

        }
    }

    async getUsers(req, res, next) {
        // var email = 'sadasdasdasdas'
        // try{
        //     const candidate = await db.query('select email from myuser where email = $1', [email])
        // if (candidate.rows[0]) {
        //     console.log(candidate.rows[0])
        //     throw new Error('Пользователь уже существует')
        // }
        // const hashpassword = await bcrypt.hash(password, 3)
        // const actovationLink = uuid.v4()
        // const user = await db.query('insert into myuser (email, pass, activationlink) values ($1, $2, $3) returning email, pass, activationlink', [email, hashpassword, actovationLink])
            
        // }
        // catch(e){         
        //      console.log(e)
        //     // res.json(all.rows[0])
        // }
    }
}

module.exports = new UserController()