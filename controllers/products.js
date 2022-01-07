const fs = require('fs');
const path = require('path');

const contollerProducts = {
    browse: (req,res) => {
        res.render('./products/productDetail')
    },
    cart: (req,res) => {
        res.render('./products/productCart')
    },
    create: (req,res) => {
        res.render('./products/createProduct')
    },
    edit: (req,res) => {
        res.render('./products/editProduct')
    },
}

module.exports= contollerProducts;