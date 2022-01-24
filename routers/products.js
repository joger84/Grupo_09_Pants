const express = require('express');
const router = express.Router();
const controller = require('../controllers/products');

router.get('/', controller.browse)

router.get('/productDetail/:id', controller.detail)

router.get('/productCart', controller.cart)

router.get('/createProduct', controller.create)
router.post('/createProduct',controller.store)

router.get('/edit/:id', controller.edit)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router;