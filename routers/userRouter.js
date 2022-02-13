const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/usersController');
const {body} = require("express-validator");
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

//llamamos express-validator
const validacion = [
    body('fullname').notEmpty().withMessage('Coloca tu nombre completo'),
    body('usuario').notEmpty().withMessage('Coloca un usuario'),
    body('email')
        .notEmpty().withMessage('Coloca correo electronico').bail()
        .isEmail().withMessage('Debes de escribir un formato de correo valido'),
    body('clave').notEmpty().withMessage('Coloca una contraseña'),
    body('fecha').notEmpty().withMessage('Coloca tu fecha de nacimiento'),
    body('paises').notEmpty().withMessage('Coloca un país'),
    body('avatarImage').custom((value,{req}) =>{
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.gif']
        if(!file){
            throw new Error('Tienes que subir una imagen')
        }else{
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones del archivo permitidas son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;

    })
] 

// Formulario de Login
router.get('/login', guestMiddelware, controller.login);

//Login process - ver validaciones (pasamos al Middelware??)
router.post('/login', controller.loginProcess);

// Formulario de Register
router.get('/register', guestMiddelware, controller.register);
// Proceso de Registro *************ver validaciones************ ALE una vez que este el MD deberiamos pasarlo aca tambien
router.post('/register', upload.single("avatarImage"),validacion, controller.store);

// Perfil de Usuario
router.get('/profile', controller.profile );

// Logout
router.post('/logout', controller.logout);


module.exports = router;