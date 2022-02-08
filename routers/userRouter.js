const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/usersController');
const {check} = require("express-validator");
const multer = require('multer');

//Middelwares
const upLoadFiles = require('../middelwares/multerMiddelware');
const authMiddelware = require("../middelwares/authMiddelware");
const autoLogin = require("../middelwares/autoLoginMiddelware");
const guestMiddelware = require('../middelwares/guestMiddelware');
const loggedUser = require("../middelwares/userLoggedMiddelware");
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
router.get('/login',controller.login);

//Login process
router.post('/login', controller.loginProcess);

// Formulario de Register
router.get('/register',controller.register);
// Proceso de Registro
router.post('/register', upload.single("avatarImage"), controller.store);

// Perfil de Usuario
router.post('/profileUsers', controller.profile);

// Logout
router.post('/logout', controller.logout);


module.exports = router;