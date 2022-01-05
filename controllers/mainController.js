const express = require('express');


const controllers = {
    index: (req,res) => {
        res.render('index')
    },
    login: (req,res) => {
        res.render('./users/login')
    },
    register: (req,res) => {
        res.render('./users/register')
    },
    productCart: (req,res) => {
        res.render('./products/productCart')
    },
    productDetail: (req,res) => {
        res.render('./products/productDetail')
    },
    create: (req,res) => {
        res.render('./products/createProduct')
    },
    editProduct: (req,res) => {
        res.render('./products/editProduct')
    },
}

module.exports = controllers;