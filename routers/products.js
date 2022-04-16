const express = require('express');
const path = require('path');
const router = express.Router();
const validationProductCreateandEdit = require('../middlewares/validationProduct');
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

router.get('/createProduct', controller.create);

router.post("/createProduct",upload.single("image"), validationProductCreateandEdit,controller.store);

router.get("/search-results", controller.searchResults);

router.get('/edit/:id', controller.edit);

router.put('/edit/:id', upload.single("image"), validationProductCreateandEdit,controller.update);

router.delete('/:id', controller.delete);

module.exports = router;