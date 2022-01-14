const express = require('express');

/* ESTO VA ACA???
const usersPath = path.resolve(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
*/

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