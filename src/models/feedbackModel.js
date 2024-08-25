const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    rating:{
        type: Number,
        required: false
    },
    name:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },   
});

module.exports= mongoose.model('Feedback', feedbackSchema)