const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    SurName:{
        type:String,
        required:true
    },
    Yas:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('User',userSchema)