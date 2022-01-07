const express = require('express');
const path = require('path');
const app = express();
const rutas = require('./routers/mainRouter');
const rutasProducts = require('./routers/products');

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname,'public')))

app.listen(3000,()=> console.log('Servidor arriba!'))

app.use('/', rutas)
app.use('/login', rutas)
app.use('/register', rutas)

app.use('/products', rutasProducts)


