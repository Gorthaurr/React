const jwt = require('jsonwebtoken')
const db = require('../db');
// const tokenModel = require('../models/token-model')
class TokenService{
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '15d'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData
        }
        catch(e){
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData
        }
        catch(e){
            return null
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await db.query('select * from tokens where userid = $1', [userId])
        if (tokenData.rows[0]) {
            await db.query('UPDATE tokens SET refreshtoken = $1 WHERE userid = $2', [refreshToken, userId])
        }
        const token = await db.query('insert into tokens (userid, refreshtoken) values ($1, $2) returning *', [userId, refreshToken])
        return token.rows[0]
    }

    async removeRefreshToken(refreshToken) {
        const tokenData = await db.query('delete from tokens where refreshtoken = $1', [refreshToken])
        return tokenData    
    }

    async findToken(token){
        const tokenData = await db.query('select * from tokens where refreshtoken = $1', [token])
        return tokenData.rows[0]
    }
}


module.exports = new TokenService()