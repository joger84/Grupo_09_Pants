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
    
}

module.exports = controllers;