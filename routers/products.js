const express = require('express');
const path = require('path');
const router = express.Router();
const validationProductCreate = require('../middlewares/validationProduct');
const validationEditProduct = require('../middlewares/validationEditProduct');
const authMiddleware = require("../middlewares/authMiddleware");
const multer = require('multer');

const controller = require('../controllers/products');

const multerDiskStorage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, path.resolve(__dirname,"../public/uploads/"));
    },
    filename: function (req, file, cb){
        const finalName = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, finalName);
    },

})
const upload = multer({ 
	storage: multerDiskStorage,
	fileFilter: (req, file, cb) => {
		const acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
		const fileExtension = path.extname(file.originalname).toLowerCase();
		if (acceptedExtensions.includes(fileExtension)) {
			cb(null, true);
		} else {
			return cb("Only .png, .jpg, .jpeg and .gif format allowed!");
		}
	}
});

router.get('/', controller.browse);

router.get('/productDetail/:id', controller.detail);

router.get('/productCart', controller.cart);

router.get('/createProduct', authMiddleware, controller.create);

router.post("/createProduct",upload.single("image"), validationProductCreate,controller.store);

router.get("/search-results", controller.searchResults);

router.get('/edit/:id', authMiddleware, controller.edit);

router.put('/edit/:id', upload.single("image"), validationEditProduct,controller.update); // al ser un form que tiene
//envio de Img tiene el ejs el multipart/form-data, por eso parsea 1ro la info y luego el MD de validaciones  

router.delete('/:id', controller.delete);

module.exports = router;