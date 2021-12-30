const express = require("express");
const controller = require("../controllers/mainController");
const router = express.Router();

router.get('/',controller.index);
router.get('/login',controller.login);
router.get('/productCart',controller.productCart);
router.get('/productDetail',controller.productDetail);
router.get('/register',controller.register);
router.get('/create',controller.create);


module.exports= router;
