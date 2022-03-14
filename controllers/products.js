const fs = require('fs');
const path = require('path');
const productPath = path.resolve(__dirname, "../data/products.json");
// const products = JSON.parse(fs.readFileSync(productPath, "utf-8"));
const {Product,Color,Size,Genre} = require("../src/database/models")

const contollerProducts = {

    browse: async(req, res) => {
      /*  return res.render('./products/products', {
            products
        })*/
      try {
          const products = await Product.findAll()
          return res.render('./products/products',{products});
        //   return res.json(products);
        
          
      } catch (error) {
          console.log(error)
      }
    },
    detail: (req, res) => {
        const id = Number(req.params.id);
        const product = products.find((oneProduct) => oneProduct.id === id)
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
        const postObj = {
            ...req.body,
            image:req.file.filename
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
        
        // const generateID = () => {
        //     const lastProduct = products[products.length - 1];
        //     // 2. Obtenemos el ID de ese último producto
        //     const lastID = lastProduct.id;
        //     // 3. Retornamos ese último ID incrementado en 1
        //     return lastID + 1;
        // }

        // if (products.length) {
        //     products.push({
        //         id: generateID(),
        //         name: req.body.name,
        //         descripcion: req.body.descripcion,
        //         cantidad: req.body.cantidad,
        //         image: req.file.filename,
        //         categoria: req.body.categoria,
        //         color: req.body.colores,
        //         talla: req.body.tallas,
        //         precio: req.body.precio
        //     })
        // } else {
        //     products.push({
        //         id: 1,
        //         name: req.body.name,
        //         descripcion: req.body.descripcion,
        //         cantidad: req.body.cantidad,
        //         image: req.file.filename,
        //         categoria: req.body.categoria,
        //         color: req.body.colores,
        //         talla: req.body.tallas,
        //         precio: req.body.precio
        //     })
        // }

        // fs.writeFileSync(productPath, JSON.stringify(products, null, ' '));

        
    },
    edit: (req, res) => {
        const id = Number(req.params.id);
        const productEdit = products.find(product => product.id === id);
        return res.render('./products/editProduct', {product: productEdit});

    },
    update: (req, res) => {
        const id = Number(req.params.id);

		// Mapeo el array de productos original para editar el producto
		const finalPdts = products.map(oneProduct => {
			if (oneProduct.id === Number(req.params.id)) {
				return { 
					...oneProduct,
					...req.body,
					image: req.file ? req.file.filename : oneProduct.image
				}
			}
			return oneProduct;
		});
        

		fs.writeFileSync(productPath, JSON.stringify(finalPdts, null, ' '));
		
		return res.redirect(`/products/productDetail/${id}`);
    },
    delete: (req, res) => {
       const id = Number(req.params.id);

       const productoEliminar = products.filter(producto => producto.id !== id);

       fs.writeFileSync(productPath, JSON.stringify(productoEliminar, null,' '));

       return res.redirect('/products');

    },
}




module.exports = contollerProducts;