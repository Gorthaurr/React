//папка для обработки ошибок унаследованная от базового класса error

module.exports = class ApiError extends Error {
    status
    errors

    constructor(status, message, errors = []){
        super(message) //берём сообщение об ошибке из класса error а остальное указываем по параметрам
        this.status = status
        this.errors = errors
    }

    static UnauthorizedError(){
        return new ApiError(401, 'Пользователь не авторизован')
    }

    static BadRequestError(message, errors = []){
        return new ApiError(400, message, errors)
    }
}