const express = require('express');
const path = require('path');
const router = require('./routers/mainRouter');
const app = express();
const rutas = require('./routers/mainRouter');

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname,'public')))

app.listen(3000,()=> console.log('Servidor arriba!'))

app.use('/', rutas)
app.use('/login', rutas)
app.use('/productCart', rutas)
app.use('/productDetail', rutas)
app.use('/register', rutas)
app.use('/create',rutas)


// app.get('/productCart', (req,res) => res.sendFile(path.resolve(__dirname,'views/productCart.html')))

// app.get('/register', (req,res) => res.sendFile(path.resolve(__dirname,'views/register.html')))

// app.get('/productDetail', (req,res) => res.sendFile(path.resolve(__dirname,'views/productDetail.html')))

// app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, 'views/login.html')))
