const HttpStatus = require('../constants/httpStatus');

function responseFormatter(req, res, next){
    
    res.success = (message = 'Success', data, httpStatus = HttpStatus.OK) => {
        res.status(httpStatus).json({
            statusCode: httpStatus,
            status: 'success',
            message,
            data
        });
    };

    res.error = (message = 'An error occurred', error = null, httpStatus = HttpStatus.INTERNAL_SERVER_ERROR) => {

        const response = {
            statusCode: httpStatus,
            status: 'error'
        };

        if (error instanceof Error)
            response.error = error.customMessage ? error.customMessage : error.message;
        else
            response.error = error;

        res.status(httpStatus).json(response);

    };


    next();
}

module.exports = responseFormatter;

