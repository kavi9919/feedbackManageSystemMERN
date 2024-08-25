const { HttpError } = require('../errors/httpError');
const HttpStatus = require('../constants/httpStatus');

function errorHandler(err, req, res, next)
{
    if(err instanceof HttpError)
    {
        res.error(err, err.message, err.status);
    }
    else{
        res.error(err, 'Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
}

module.exports = errorHandler;