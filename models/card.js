const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
    title: String,
    picture: String,
    description: String,
    sound: String, 
    authorId: String,
}, { timestamps: true })


module.exports = mongoose.model('Card', cardSchema)