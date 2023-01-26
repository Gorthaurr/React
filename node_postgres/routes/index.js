// Папка с настройками эндпоинтов, тут проходит как валидация данных, так и приклрепление функций к эндпоинтам
// надо ли под каждую нужду делать новый файл роутов вопрос открытый, но наверное нет

const Router = require('express').Router
const UserController = require('../controllers/user_controller')
const CardController = require('../controllers/card_controller')
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
router.get('/cards', CardController.getCards)
router.get('/cards/:id_card', CardController.getCard)


module.exports = router