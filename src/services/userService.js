const User = require('../models/userModel');

async function getAll()
{
    return await User.find();
}


module.exports = {
    getAll
}