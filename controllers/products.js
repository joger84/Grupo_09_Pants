const fs = require('fs');
const path = require('path');
const productPath = path.resolve(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productPath, "utf-8"));
const contollerProducts = {

    browse: (req,res) => {
        return res.render('./products/products', {products})
    },

    detail: (req,res) => {
        return res.render('./products/productDetail')
    },
    cart: (req,res) => {
        return res.render('./products/productCart')
    },
    create: (req,res) => {
        return res.render('./products/createProduct')
    },
    edit: (req,res) => {
        return res.render('./products/editProduct')
    },
}

module.exports= contollerProducts;