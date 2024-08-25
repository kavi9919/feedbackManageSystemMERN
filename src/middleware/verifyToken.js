const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;


function verifyToken(req, res, next)
{
    const token = req.headers.authorization?.split(" ")[1];

    jwt.verify(token, JWT_SECRET, (err, data) =>{
        if(!err)
            next();
        else
            res.error(err.message, err, err.status);
   });
}

module.exports = verifyToken;