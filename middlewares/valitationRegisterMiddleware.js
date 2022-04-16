// *********Middleware de Validaciones REGISTER**************
const path = require('path');
const {body} = require("express-validator");

//llamamos express-validator
 

module.exports = [
    body('fullName').notEmpty().withMessage('Ingresa tu nombre completo').bail().isLength({min:2}).withMessage('El campo Nombre y Apellido debe contener más de 2 caracteres'),

    body('user').notEmpty().withMessage('Ingresa un usuario').isLength({min:2}).withMessage('El nombre del modelo debe contener mas de 2 caracteres'),

    body('eMail').notEmpty().withMessage('Ingresa un correo electronico').isEmail().withMessage('Debes de escribir un formato de correo valido'),

    body('password').notEmpty().withMessage('Ingresa una contraseña').bail().isLength({min:8}).withMessage('El nombre del modelo debe contener mas de 8 caracteres'),

    body('dateBirth').notEmpty().withMessage('Ingresa tu fecha de nacimiento'),

    body('country').notEmpty().withMessage('Ingresa un país'),

    body('address').notEmpty().withMessage('Ingresa tu direccion'),
    
    body('avatarImage').custom((value,{req}) =>{
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"]
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

