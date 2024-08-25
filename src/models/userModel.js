const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    userType:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },

    userName:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },

    email:{
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 100
    },

    password:{
        type: String,
        required:true,
        minlength:1,
        maxlength: 20
    }
},{ collection: 'user' });

const User = mongoose.model('User', userSchema);

module.exports = User;