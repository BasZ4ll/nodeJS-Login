const momgoose = require('mongoose'); //เรียกใช้งาน mongoose

const productSchema = momgoose.Schema({
    name:String,
    detail:{
        type:String,
    },
    price:{
        type:Number,
    },
},{ timestamps: true });

module.exports = momgoose.model('product',productSchema); //ส่งออกไปให้คนอื่นใช้งาน