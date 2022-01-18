const express = require('express');
const router = express.Router();
const controller = require('../controllers/products');

router.get('/', controller.browse)

router.get('/productDetail/:id', controller.detail)

router.get('/productCart', controller.cart)

router.get('/createProduct', controller.create)
router.post('/createProduct',controller.store)

router.get('/edit/:id', controller.edit)

router.get('/editProduct', controller.edit)

module.exports = router;