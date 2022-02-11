const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/usersController');
const {check} = require("express-validator");
const multer = require('multer');

//Middelwares
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
const upload = multer({storage: multerDiskStorage});

// Formulario de Login
router.get('/login', guestMiddelware, controller.login);

//Login process - ver validaciones (pasamos al Middelware??)
router.post('/login', controller.loginProcess);

// Formulario de Register
router.get('/register', guestMiddelware, controller.register);
// Proceso de Registro ver validaciones (pasamos al Middelware??)
router.post('/register', upLoadFiles.single("avatarImage"), controller.store);

// Perfil de Usuario
router.get('/profile', authMiddelware, controller.profile );

// Logout
router.post('/logout', controller.logout);


module.exports = router;