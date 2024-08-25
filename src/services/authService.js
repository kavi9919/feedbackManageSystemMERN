const jwt = require('jsonwebtoken');
const { BadRequestError, NotFoundError } = require('../errors/httpError');
const { validateFieldState, validateUserType } = require('../errors/errorUtil');
const User = require('../models/userModel');

const { JWT_SECRET } = process.env;

async function createUser(userData)
{

    const userStatus = await User.findOne({email: userData.email});

    if(!userStatus)
    {
        const user = new User(userData);
        await user.save();
        return user;
    }
    else
       throw new BadRequestError("User already exists with given email.");


    
}

async function userLogin(userData)
{
    const user = await User.findOne({email: userData.email});

    if(user)
    {
        if(user.password === userData.password)
        {
                const authToken = await new Promise((resolve, reject) => {
                    jwt.sign({ email: userData.email }, JWT_SECRET, (err, token) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({ token: token });
                        }
                    });
                });
                return authToken;
        } 
        else
          throw new BadRequestError("Invalid Password");
           
    }
    else
        throw new NotFoundError("User Not Found");
    
    
}

module.exports = {
    createUser,
    userLogin
};