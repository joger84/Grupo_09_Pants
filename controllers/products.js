// const fs = require('fs');
// const path = require('path');
// const productPath = path.resolve(__dirname, "../data/products.json");
// const products = JSON.parse(fs.readFileSync(productPath, "utf-8"));
const { Op } = require("sequelize");
const {Product,Color,Size,Genre} = require("../src/database/models")
const {validationResult} = require('express-validator');
const { send } = require('process');

const contollerProducts = {

    browse: async(req, res) => {
      /*  return res.render('./products/products', {
            products
        })*/
      try {
          const products = await Product.findAll({include: ['colors','sizes','genres']})
          console.log(products)
          return res.render('./products/products',{products});
        //   return res.json(products);
        
          
      } catch (error) {
          console.log(error)
      }
    },
    detail: async(req, res) => {
        const product = await Product.findByPk(req.params.id,{include: ['colors','sizes','genres']});
        // console.log(product)
        // return res.json(product)
        return res.render('./products/productDetail', {
            product
        })
    },
    cart: (req, res) => {
        return res.render('./products/productCart')
    },
    create: async(req, res) => {
        try {
            const colors = await Color.findAll({})
            const sizes = await Size.findAll({})
            const genres = await Genre.findAll({})
            return res.render('./products/createProduct', {colors,sizes,genres})
        } catch (error) {
            console.log(error)
        }
        
    },
    store: async(req, res) => {
        let postObj = {}
        const productValidation = validationResult(req);
        const colors = await Color.findAll({})
        const sizes = await Size.findAll({})
        const genres = await Genre.findAll({})
        
        if(req.file === undefined){
            postObj = {
                ...req.body,
                image: 'default.png'
            }
        }else{
            postObj = {
                ...req.body,
                image: req.file.filename
            }
        }
        
        if(productValidation.errors.length){
            // console.log(postObj)
            return res.render('./products/createProduct', {errors: productValidation.mapped(),colors,sizes,genres,oldDate:req.body})
        }
        
        // return res.json(postObj)

        try {
            const productStored = await Product.create(postObj) 
            productStored.addColors(postObj.colors)
            productStored.addGenres(postObj.genres)
            productStored.addSizes(postObj.sizes)
            return res.redirect('/products');
        } catch (error) {
            console.log(error)
        }
    },
    edit: async(req, res) => {
        
        const productEdit = await Product.findByPk(req.params.id,{include: ['colors','sizes','genres']});
        // return res.json(productEdit)
		const colors = await Color.findAll({});
		const sizes = await Size.findAll({});
		const genres = await Genre.findAll({});
        return res.render('./products/editProduct', {productEdit,colors,sizes,genres});
        
    },
    update: async(req, res) => {
        const productEdit = await Product.findByPk(req.params.id,{include: ['colors','sizes','genres']});
        const colors = await Color.findAll({});
        const sizes = await Size.findAll({});
        const genres = await Genre.findAll({});
        const id = req.params.id
        let productValidation = validationResult(req);
        //console.log(productValidation)
        //return res.json(productValidation)
        if (productValidation.errors.length) {
            return res.render('./products/editProduct', { errors: productValidation.mapped(),productEdit,colors,sizes,genres })//el mapped me da un objeto de objetos
        }

        const productUpdate = await Product.findByPk(id,{include: ['colors','sizes','genres']});
        
        productUpdate.model = req.body.model ? req.body.model : productUpdate.model;
        productUpdate.description = req.body.description ? req.body.description : productUpdate.description;
        productUpdate.quantity = req.body.quantity ? req.body.quantity : productUpdate.quantity;
        productUpdate.price = req.body.price ? req.body.price : productUpdate.price;
        productUpdate.discount = req.body.discount ? req.body.discount : productUpdate.discount;
        productUpdate.image = req.file ? req.file.filename : productUpdate.image;
        
        if(req.body.colors){
            productUpdate.removeColors(productUpdate.colors)
            productUpdate.addColors(req.body.colors)
        }
        if(req.body.genres){
            productUpdate.removeGenres(productUpdate.genres)
            productUpdate.addGenres(req.body.genres)
        }
        if(req.body.sizes){
            productUpdate.removeSizes(productUpdate.sizes)
            productUpdate.addSizes(req.body.sizes)
        }
        
       
          productUpdate.save();
          return res.redirect(`/products/productDetail/${id}`);

},
        
    
 delete: async(req, res) => {
        const productId = req.params.id;
        try {
            const productToDelete = await Product.findByPk(productId, { include: ['colors','sizes','genres']});
            // productToDelete.removeColors(productToDelete.colors)
            // productToDelete.removeGenres(productToDelete.genres)
            // productToDelete.removeSizes(productToDelete.sizes)
            productToDelete.destroy();
        } catch (error) {
            console.log(error)
        }

       return res.redirect('/products');
    },
    searchResults: async (req, res) => {
		const description = req.query.description;
		const products = await Product.findAll({
            where: {
				description: {
					[Op.like]: `%${description}%`
				} 
			}
		});
		// return res.json(products);
        return res.render('./products/search-results', {products});
        
	}
}

module.exports = contollerProducts;