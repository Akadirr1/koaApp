const mongoose = require('mongoose')
const EventsScheme = new mongoose.Schema({
    Date: {
        required: true,
        type: Date
    },
    Location:
    {
        required: true,
        type: String
    },
    Capasity: {
        required: true,
        type: Number
    },
    Owner: {
        required: true,
        type: String
    }
},
    { timestamps: true })
module.exports = mongoose.model('Event', EventsScheme)