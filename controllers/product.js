const Product = require('../models/product')

exports.read = async(req, res)=>{
    res.send(req.body)
}

exports.list = async(req, res)=>{
    try{
        const product = await Product.find({})
        res.send(product)
    }catch (err) {
        console.log(err)
        res.status(500).send('Error จ้า')
    }
}

exports.create = async(req, res)=>{
    try{
        console.log(req.body)
        const producted = await Product(req.body).save()


        res.send(producted)

    }catch (err) {
        console.log(err)
        res.status(500).send('Error จ้า')
    }
}

exports.update = async(req, res)=>{
    try{
        res.send('Hello update')
    }catch (err) {
        console.log(err)
        res.status(500).send('Error จ้า')
    }
}
exports.deleted = async(req, res)=>{
    try{
        res.send('Hello delete')
    }catch (err) {
        console.log(err)
        res.status(500).send('Error จ้า')
    }
}