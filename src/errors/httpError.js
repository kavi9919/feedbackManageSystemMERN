
const httpStatus = require('../constants/httpStatus');

class HttpError extends Error{
    constructor(message, status, customMessage)
    {
        super(message);
        this.status = status;
        this.customMessage = customMessage;
    }
    
}

class BadRequestError extends HttpError{
    constructor(customMessage, message = 'Bad Request')
    {
        super(message, httpStatus.BAD_REQUEST, customMessage);
    }
}

class NotFoundError extends HttpError{
    constructor(customMessage, message = 'Not Found')
    {
        super(message, httpStatus.NOT_FOUND, customMessage);
    }
}

module.exports = {HttpError, BadRequestError, NotFoundError}