
const express  = require('express')
const router = express.Router()
const Controller = require('../controller/controller')
const cors = require('cors')

router.get('/', Controller.showIndex)

router.post('/add-products',Controller.addProducts)

router.get('/get-products',cors(),Controller.showProducts)

router.get('/get-product/:id',Controller.getCategoryItems)

router.put('/update-product/:id', Controller.updateCategory)

router.delete('/delete-product/:id', Controller.deleteCategory)

module.exports = router