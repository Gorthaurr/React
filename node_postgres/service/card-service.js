const db = require('../db');
const ApiError = require('../exceptions/api-error')


class CardService {
    async getCards() {
        const cards = await db.query('select * from card')
        return cards.rows
    }

    async getCardContent(card_id) {
        
        const card = await db.query('select * from card_content where card_id = $1', [card_id])
        console.log(card_id)
        if (!card.rows) {
            throw new ApiError.BadRequestError('Такой карточки не существует')
        }
        return card.rows
    }

    async getAllCategories() {
        const categories = await db.query('select distinct category from card_content')
        return categories.rows
    }

}

module.exports = new CardService()