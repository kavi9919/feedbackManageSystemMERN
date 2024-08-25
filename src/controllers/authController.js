const authService = require('../services/authService');
const HttpStatus = require('../constants/httpStatus');
const { BadRequestError } = require('../errors/httpError');


async function createUser(req, res)
{
    try{
        const user = await authService.createUser(req.body);
        res.success('Successfully register a new user', user, HttpStatus.CREATED);
    }
    catch(err)
    {
        res.error(err.message, err, err.status);
    }

}

async function userLogin(req, res)
{
    try{
        const user = await authService.userLogin(req.body);
        
        res.success('Successfully login', user, HttpStatus.OK);
    }
    catch(err)
    {
        res.error(err.message, err, err.status);
    }
}

module.exports = {
    createUser,
    userLogin
};