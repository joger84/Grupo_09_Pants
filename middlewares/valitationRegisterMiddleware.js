// *********Middleware de Validaciones REGISTER**************
const path = require('path');
const {body} = require("express-validator");

//llamamos express-validator
 

module.exports = [
    body('fullName').notEmpty().withMessage('Ingresa tu nombre completo'),
    body('user').notEmpty().withMessage('Ingresa un usuario').bail(),
    body('eMail')
        .notEmpty().withMessage('Ingresa un correo electronico')
        .isEmail().withMessage('Debes de escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('Ingresa una contraseña').bail(),
    body('dateBirth').notEmpty().withMessage('Ingresa tu fecha de nacimiento').bail(),
    body('country').notEmpty().withMessage('Ingresa un país').bail(),
    body('address').notEmpty().withMessage('Ingresa tu direccion').bail(),
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

