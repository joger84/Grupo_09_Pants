// *********Middelware de Validaciones LOGIN**************
const path = require('path');
const {body} = require("express-validator");

//llamamos express-validator

module.exports = [
         body('email')
            .notEmpty().withMessage('Ingresa un correo electronico').bail()
            .isEmail().withMessage('Debes de escribir un formato de correo valido'),
        body('clave').notEmpty().withMessage('Ingresa una contraseña'),
]