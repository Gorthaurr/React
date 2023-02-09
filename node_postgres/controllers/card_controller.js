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
            console.log(card)
            res.json(card)
        }
        catch(e){
            next(e);
        }
    }

    async getCategories(req, res, next) {
        try{
            const categories = await cardService.getAllCategories()
            res.json(categories)
        }
        catch(e){
            next(e);
        }

    }
}

module.exports = new CardController()