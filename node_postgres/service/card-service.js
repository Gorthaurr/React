const db = require('../db');
// const ApiError = require('../exceptions/api-error')


class CardService {
    async getCards() {
        const cards = await db.query('select * from card')
        return cards.rows
    }
}

module.exports = new CardService()