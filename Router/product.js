const express = require('express')
const { read, list, create, update, deleted } = require('../controllers/product')
const router = express.Router()


//http://localhost:5000/api/product
router.get('/product',list)
router.get('/product/:id',read)
router.post('/product',create)
router.put('/product/:id',update)
router.delete('/product/:id',deleted)



module.exports = router