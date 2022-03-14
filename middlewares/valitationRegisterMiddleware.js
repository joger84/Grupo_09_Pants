// *********Middleware de Validaciones REGISTER**************
const path = require('path');
const {body} = require("express-validator");

//llamamos express-validator
 

module.exports = [
    body('fullname').notEmpty().withMessage('Ingresa tu nombre completo'),
    body('usuario').notEmpty().withMessage('Ingresa un usuario'),
    body('email')
        .notEmpty().withMessage('Ingresa un correo electronico').bail()
        .isEmail().withMessage('Debes de escribir un formato de correo valido'),
    body('clave').notEmpty().withMessage('Ingresa una contraseña'),
    body('fecha').notEmpty().withMessage('Ingresa tu fecha de nacimiento'),
    body('paises').notEmpty().withMessage('Ingresa un país'),
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

