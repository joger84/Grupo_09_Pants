// *********Middleware de Validaciones PRODUCT Create & Edit**************
const path = require('path');
const {body} = require("express-validator");

//llamamos express-validator


module.exports = [
    body('model').notEmpty().withMessage('Ingresa un nombre de Modelo').bail()
    .isLength({min:5}).withMessage('El nompre del modelo debe contener mas de 5 caracteres'),
    
    body('description').notEmpty().withMessage('Ingresa una descripcion del producto').bail()
    .isLength({min:20}).withMessage('EL campo de descripcion debe contener mas de 20 caracteres'),
   
    body('quantity').notEmpty().withMessage('Ingresa una Cantidad'),
    body('genres').notEmpty().withMessage('Ingresa un Genero'),
    body('colors').notEmpty().withMessage('Ingresa un Color'),
    body('sizes').notEmpty().withMessage('Ingresa un Talle'),
    body('price').notEmpty().withMessage('Ingresa un Precio').bail()
    .isNumeric(),
    
    body('image').custom((value,{req}) =>{
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"]
        if(!file){
            throw new Error('Tienes que subir una imagen valida')
        }else{
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones del archivo permitidas son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;

    })
] 