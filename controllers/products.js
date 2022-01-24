const fs = require('fs');
const path = require('path');
const productPath = path.resolve(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productPath, "utf-8"));

const contollerProducts = {

    browse: (req, res) => {
        return res.render('./products/products', {
            products
        })
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
    create: (req, res) => {
        return res.render('./products/createProduct')
    },
    store: (req, res) => {
        const generateID = () => {
            const lastProduct = products[products.length - 1];
            // 2. Obtenemos el ID de ese último producto
            const lastID = lastProduct.id;
            // 3. Retornamos ese último ID incrementado en 1
            return lastID + 1;
        }

        if (products.length) {
            products.push({
                id: generateID(),
                name: req.body.name,
                descripcion: req.body.descripcion,
                cantidad: req.body.cantidad,
                imagen: 'default',
                categoria: req.body.categoria,
                color: req.body.colores,
                talla: req.body.tallas,
                precio: req.body.precio
            })
        } else {
            products.push({
                id: 1,
                name: req.body.name,
                descripcion: req.body.descripcion,
                cantidad: req.body.cantidad,
                imagen: 'default',
                categoria: req.body.categoria,
                color: req.body.colores,
                talla: req.body.tallas,
                precio: req.body.precio
            })
        }

        fs.writeFileSync(productPath, JSON.stringify(products, null, ' '));

        return res.redirect('/products');
    },
    edit: (req, res) => {
        const id = Number(req.params.id);
        const productEdit = products.find(product => product.id === id);
        return res.render('./products/editProduct', {product: productEdit});

    },
    update: (req, res) => {

		const id = Number(req.params.id);
		const productsArrayEdited = products.map(oneProduct => {
			if (oneProduct.id === id) { 
				return {
				...oneProduct, 
				name: req.body.name,
                descripcion: req.body.descripcion,
                cantidad: req.body.cantidad,
                imagen: 'default',
                categoria: req.body.categoria,
                color: req.body.colores,
                talla: req.body.tallas,
                precio: req.body.precio
				}
			}
			return oneProduct; 
		});

		fs.writeFileSync(productPath, JSON.stringify(productsArrayEdited, null, ' '));
		
		return res.redirect('/products');
    },
    delete: (req, res) => {
       const id = Number(req.params.id);

       const productoEliminar = products.filter(producto => producto.id !== id);

       fs.writeFileSync(productPath, JSON.stringify(productoEliminar, null,' '));

       return res.redirect('/products');

    },
}




module.exports = contollerProducts;