const Product = require('../models/product')
const fs = require('fs')

exports.read = async(req, res)=>{
    res.send(req.body)
}

exports.list = async(req, res)=>{
    try{
        const product = await Product.find({}).exex();
        res.send(product)
    }catch (err) {
        console.log(err)
        res.status(500).send('Error จ้า')
    }
}

exports.create = async(req, res)=>{
    try{
        var data = req.body
        if(req.file){
            data.file = req.file.filename
        }
        const producted = await Product(data).save()
        res.send(producted)
    }catch (err) {
        console.log(err)
        res.status(500).send('Error จ้า')
    }
}

exports.update = async(req, res)=>{
    try{
        const id = req.params.id
        const updated = await Product
        .findOneAndUpdate({_id: id}, req.body, {new: true})
        res.send(updated)
    }catch (err) {
        console.log(err)
        res.status(500).send('Error จ้า')
    }
}
exports.deleted = async(req, res)=>{
    try{
        const id = req.params.id
        const removed = await Product.findOneAndDelete({_id: id}).exec()
        res.send(removed)
    }catch (err) {
        console.log(err)
        res.status(500).send('Error จ้า')
    }
}