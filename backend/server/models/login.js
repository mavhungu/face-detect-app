const mongoose = require('mongoose')
//validator = require('validator')

const login = mongoose.Schema({
    name:{
        type: String, required : true,trim: true,createIndexes: true
    },
    password:{
        type: String, required: true, trim: true
    },
    date:{
        type: Date,
        default : Date.now
    }
})
module.exports = mongoose.model('login', login)