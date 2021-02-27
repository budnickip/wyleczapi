const mongoose = require('mongoose')

const subscribersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        requierd: true
    },
    subscribeDate: {
        type: Date,
        requierd: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscribersSchema)