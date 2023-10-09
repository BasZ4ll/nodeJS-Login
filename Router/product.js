const express = require('express')
const { read, list, create, update, deleted } = require('../controllers/product')
const router = express.Router()
const { auth } = require('../middleware/auth')


//http://localhost:5000/api/product
router.get('/product', list)
router.get('/product/:id', auth, read)
router.post('/product', auth, create)
router.put('/product/:id', auth, update)
router.delete('/product/:id', auth, deleted)



module.exports = router