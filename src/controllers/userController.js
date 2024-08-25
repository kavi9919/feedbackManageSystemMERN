const userService = require('../services/userService');
const HttpStatus = require('../constants/httpStatus');
const { BadRequestError } = require('../errors/httpError');

async function getAll(req, res)
{
   try{
        const users = await userService.getAll();
        res.success('Successfully recieve users', users, HttpStatus.OK);
   }
   catch(err)
   {
        res.error('Failed to get users', new BadRequestError(), HttpStatus.BAD_REQUEST);
   }
}


module.exports = {
    getAll
}