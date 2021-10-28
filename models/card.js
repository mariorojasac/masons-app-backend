const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({

}, { timestamps: true })


module.exports = mongoose.model('Card', cardSchema)