const express = require('express');
const path = require('path');
const app = express();
const rutas = require('./routers/mainRouter');
const rutasProducts = require('./routers/products');
const rutasUser = require('./routers/userRouter');
const methodOverride = require('method-override')
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

//MD que nos permite recibir la informacion que viaja por formularios(post en req.body) 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

// Motor de app
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname,'public')))

app.listen(3000,()=> console.log('Servidor en puerto 3000!'))

//nos va a permitir poder acceder al req.session desde cualquier lugar de la app (salvo vistas para vistas req.locals)
app.use(session({
    secret: 'keyboard cat',
    resave: false ,
    saveUninitialized: true
}));

app.use(cookies());

/* aca va el MD para que muestre o no en el nav (login y register), va despues del session si lo ponemos antes no funciona porque no llego a leer la linea de session*/

app.use(userLoggedMiddleware);


//**************PRUEBA PARA VER EN CONSOLA EL USUARIO LOGUEADO************/
//app.use((req, res, next) =>{
  //  console.log("Usuario logueado: " + req.session.userLogged?.fullName);
   // next();
//})


// Routers
app.use('/', rutas)

app.use('/user', rutasUser)

app.use('/products', rutasProducts)


