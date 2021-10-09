const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schemaItem = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    photo: {
        type: String
    },
    isPosted:{
        type: Date,
        default: new Date
    }
})

const images = mongoose.model('images', schemaItem);

module.exports = images;