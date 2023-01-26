const db = require('../db');
const {validationResult} = require('express-validator')
// const ApiError = require('../exceptions/api-error');
const cardService = require('../service/card-service');


class CardController {
    async getCards(req, res, next) {
        try{
            const cards = await cardService.getCards()
            res.json(cards)
        }
        catch(e){
            next(e);
        }
    }

    async getCard(req, res, next) {
        try{
            const id_card = req.params.id_card
            const card = await cardService.getCardContent(id_card)
            res.json(card)
        }
        catch(e){
            next(e);
        }
    }
}

module.exports = new CardController()