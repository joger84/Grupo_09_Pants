// *********Middleware de Validaciones PRODUCT EDIT**************
const path = require('path');
const {body} = require("express-validator");

//llamamos express-validator


module.exports = [
    body('model').notEmpty().withMessage('BACK -Debes ingresar un nombre del modelo'),
    body('description').notEmpty().withMessage('BACK -Debes ingresar la descripcion del producto'),
    body('quantity').notEmpty().withMessage('BACK -Debes ingresar una cantidad'),
    body('genres').notEmpty().withMessage('BACK -Debes ingresar un género'),
    body('colors').notEmpty().withMessage('BACK -Debes ingresar un color'),
    body('sizes').notEmpty().withMessage('BACK -Debes ingresar un talle'),
    body('price').notEmpty().withMessage('BACK -Debes ingresar un precio'),

    
    body('image').custom((value,{req}) =>{
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"]
        if(!file){
            throw new Error('Tienes que agregar una imagen')
        }
        else{
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones del archivo permitidas son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;

    })
] 