const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/usersController');
/*const {body} = require("express-validator");*/
const multer = require('multer');

//Middelwares de rutas
const upLoadFiles = require('../middelwares/multerMiddelware');
const authMiddelware = require("../middelwares/authMiddelware");
const guestMiddelware = require('../middelwares/guestMiddelware');
const validations = require('../middelwares/valitationRegisterMiddelware');


const multerDiskStorage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, path.resolve(__dirname,"../public/uploads/"));
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + " imageAvatar.jpg");
    },
})
const upload = multer({multerDiskStorage});

// Formulario de Login
router.get('/login', guestMiddelware, controller.login);

//Login process 
router.post('/login', controller.loginProcess);

// Formulario de Register
router.get('/register', guestMiddelware, controller.register);
// Proceso de Registro 
router.post('/register', upload.single("avatarImage"),validations, controller.store);

// profile
router.get('/profile', controller.profile);


// Logout
router.post('/logout', controller.logout);


module.exports = router;