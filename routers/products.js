const express = require('express');
const router = express.Router();
const controller = require('../controllers/products');

router.get('/', controller.browse)

router.get('/productCart', controller.cart)

router.get('/createProduct', controller.create)

router.get('/editProduct', controller.edit)

module.exports = router;