// *********Middleware de Validaciones PRODUCT Create **************
const path = require('path');
const {body} = require("express-validator");

//llamamos express-validator


module.exports = [
    body('model').notEmpty().withMessage('Ingresa un nombre del Modelo, con al menos 5 digitos'),
    body('description').notEmpty().withMessage('Ingresa una Descripcion del producto, con al menos 20 caracteres'),
    body('quantity').notEmpty().withMessage('Ingresa una Cantidad'),
    body('genres').notEmpty().withMessage('Ingresa un Género'),
    body('colors').notEmpty().withMessage('Ingresa un Color'),
    body('sizes').notEmpty().withMessage('Ingresa una Talla'),
    body('price').notEmpty().withMessage('Ingresa un Precio'),

    
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