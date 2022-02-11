const express = require('express');
const path = require('path');
const app = express();
const rutas = require('./routers/mainRouter');
const rutasProducts = require('./routers/products');
const rutasUser = require('./routers/userRouter');
const methodOverride = require('method-override')
const session = require('express-session');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

// Motor de app
app.set('view engine', 'ejs');

//MD userLogged
//const userLoggedMD = require("./middelwares/userLoggedMiddelware");
//app.use(userLoggedMD)

app.use(express.static(path.resolve(__dirname,'public')))

app.listen(3000,()=> console.log('Servidor arriba!'))

app.use(session({
    secret: 'keyboard cat',
    resave: false ,
    saveUninitialized: true
}));

//**************PRUEBA PARA VER EN CONSOLA EL USUARIO LOGUEAGO************/
/*app.use((req, res, next) =>{
    console.log("Usuario logueado: " + req.session.userLogged?.fullName);
    next();
})*/


// Routers
app.use('/', rutas)

app.use('/user', rutasUser)

app.use('/products', rutasProducts)


