

const ApiError = require('../exceptions/api-error')
const tokerService = require('../service/token-service')

module.exports = function(req, res, next) {
    try{
        const authorizationHeader = req.headers.authorization
        if (!authorizationHeader) {
            return next(ApiError.authorizationError())
        }

        const accessToken = authorizationHeader.split(' ', )[1]
        if (!accessToken) {
            return next(ApiError.authorizationError())
        }

        const userData = tokerService.validateAccessToken(accessToken)
        if (!userData) {
            return next(ApiError.authorizationError())
        }

        req.user = userData
        next()
    }
    catch(e){5
        return next(ApiError.UnauthorizedError())
    }
}