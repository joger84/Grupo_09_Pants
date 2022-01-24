const express = require('express');
const path = require('path');
const router = express.Router();

const multer = require('multer');

const controller = require('../controllers/products');

const multerDiskStorage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, path.resolve(__dirname,"../public/uploads/"));
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + " imagenPrueba.jpg");
    },

})

const upload = multer({storage: multerDiskStorage});

router.get('/', controller.browse);

router.get('/productDetail/:id', controller.detail);

router.get('/productCart', controller.cart);

router.get('/createProduct', controller.create);

router.post("/createProduct", upload.single("productImage"), controller.store);

router.get('/edit/:id', controller.edit);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;