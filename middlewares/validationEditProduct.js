// *********Middleware de Validaciones PRODUCT EDIT**************
const path = require('path');
const {body} = require("express-validator");

//llamamos express-validator


module.exports = [
    body('model').notEmpty().withMessage('Ingresa un nombre del modelo'),
    body('description').notEmpty().withMessage('Ingresa una descripcion del producto'),
    body('quantity').notEmpty().withMessage('Ingresa una cantidad'),
    body('genres').notEmpty().withMessage('Ingresa un género'),
    body('colors').notEmpty().withMessage('Ingresa un color'),
    body('sizes').notEmpty().withMessage('Ingresa una talla'),
    body('price').notEmpty().withMessage('Ingresa un precio'),

    
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