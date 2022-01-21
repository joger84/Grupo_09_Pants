const express = require('express');
const path = require("path");
const fs = require("fs")

const usersPath = path.resolve(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

