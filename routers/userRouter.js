const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/usersController');
const {body} = require("express-validator");

//Middelwares de rutas
const upLoadFiles = require('../middelwares/multerMiddelware');
const authMiddelware = require("../middelwares/authMiddelware");
const guestMiddelware = require('../middelwares/guestMiddelware');
const validations = require('../middelwares/valitationRegisterMiddelware');

const validatorLogin = [
    body('email')
        .notEmpty().withMessage('Ingresa un correo electronico').bail()
        .isEmail().withMessage('Debes de escribir un formato de correo valido'),
    body('clave').notEmpty().withMessage('Ingresa una contraseña'),
] 

// Formulario de Login
router.get('/login', guestMiddelware, controller.login);

//Login process 
router.post('/login',validatorLogin, controller.loginProcess);

// Formulario de Register
router.get('/register', guestMiddelware, controller.register);
// Proceso de Registro 
router.post('/register', upLoadFiles.single("avatarImage"),validations, controller.store);

// profile
router.get('/profile', authMiddelware, controller.profile);


// Logout
router.post('/logout', controller.logout);


module.exports = router;