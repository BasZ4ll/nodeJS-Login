const express = require('express')
const { read, list, create, update, deleted } = require('../controllers/product')
const router = express.Router()
const { auth } = require('../middleware/auth')
const { upload } = require('../middleware/upload')


//http://localhost:5000/api/product
router.get('/product', list)
//router.get('/product', auth, list)
//if you want to use middleware, you can use it like this. ""auth""" 
router.get('/product/:id', read)
router.post('/product', upload, create)
router.put('/product/:id', update)
router.delete('/product/:id', deleted)


module.exports = router