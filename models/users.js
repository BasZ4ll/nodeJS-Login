const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    password:String
},{ timestamps: true });

module.exports = mongoose.model('users',userSchema); //ส่งออกไปให้คนอื่นใช้งาน