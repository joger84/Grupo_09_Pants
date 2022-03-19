const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/usersController');
const {body} = require("express-validator");

//Middelwares de rutas
const upLoadFiles = require('../middlewares/multerMiddleware');
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require('../middlewares/guestMiddleware');
const validations = require('../middlewares/valitationRegisterMiddleware');
const validatorLogin = require('../middlewares/validationLoginMiddleware');

// Formulario de Login
router.get('/login', guestMiddleware, controller.login);

//Login process 
router.post('/login',validatorLogin, controller.loginProcess);

// Formulario de Register
router.get('/register', guestMiddleware, controller.register);
// Proceso de Registro 
router.post('/register', upLoadFiles.single("avatarImage"),validations, controller.store);

// profile
router.get('/profile', authMiddleware, controller.profile);
//proceso de modificacion de profile 
router.get('/editProfile', controller.editProfile)

// Logout
router.post('/logout', controller.logout);


module.exports = router;