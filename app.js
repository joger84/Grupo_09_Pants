const express = require('express');
const path = require('path');
const app = express();
const rutas = require('./routers/mainRouter');
const rutasProducts = require('./routers/products');
const rutasUser = require('./routers/userRouter');
const methodOverride = require('method-override')
const session = require('express-session')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname,'public')))

app.listen(3000,()=> console.log('Servidor arriba!'))

app.use(session({
    secret: 'Keboard cat', // puede ir cualquier palabra.
    resave: false,
    saveUninitialized: true,
}));

app.use('/', rutas)

app.use('/user', rutasUser)

app.use('/products', rutasProducts)


