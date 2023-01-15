const db = require('../db');
const {validationResult} = require('express-validator')
// const ApiError = require('../exceptions/api-error');
const cardService = require('../service/card-service');


class CardController {
    async getCards(req, res, next) {
        try{
            const cards = cardService.getCards()
            res.json(cards.rows)
        }
        catch(e){
            next(e);
        }
    }
}

module.exports = new CardController()