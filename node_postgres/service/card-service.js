const db = require('../db');
const ApiError = require('../exceptions/api-error')


class CardService {
    async getCards() {
        const cards = await db.query('select * from card')
        return cards.rows
    }

    async getCardContent(id_card) {
        const card = await db.query('select * from card_content where id_card = $1', [id_card])
        if (!card.rows) {
            throw new ApiError.BadRequestError('Такого пользователя не существует')
        }
        return card.rows
    }
}

module.exports = new CardService()