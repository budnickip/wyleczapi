const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        requierd: true
    },
    price: {
        type: Number,
        requierd: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    picture: {
        type: String
    },
    addDate: {
        type: Date,
        requierd: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Item', itemsSchema)