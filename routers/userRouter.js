const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/usersController');
const {check} = require("express-validator");
const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, path.resolve(__dirname,"../public/uploads/"));
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + " imageAvatar.jpg");
    },

})
const upload = multer({storage: multerDiskStorage});

router.get('/login',controller.login);

router.get('/register',controller.register);
router.post('/register', upload.single("avatarImage"), controller.store);

router.post('/profileUsers', controller.profile);

router.post('/logout', controller.logout);

module.exports = router;