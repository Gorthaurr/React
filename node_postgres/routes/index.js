const Router = require('express').Router
const UserController = require('../controllers/user_controller')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')

router.post('/registration', 
            body('email').isEmail(),
            body('password').isLength({min:3, max: 15}),
            UserController.registration
            )
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:link', UserController.activate)
router.get('/refresh', UserController.refresh)
router.get('/users', authMiddleware, UserController.getUsers)
router.get('/test', UserController.test)

module.exports = router