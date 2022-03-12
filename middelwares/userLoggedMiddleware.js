/******MIDDLEWARE DE APP SI ESTAS LOGUEADO NO MUESTRA LOS BOTONES DE LOGIN Y REGISTER *********/


function userLoggedMiddleware (req, res, next){
    res.locals.isUserLogged = false
    
    if (req.session && req.session.userLogged)
        res.locals.isUserLogged = true
    next(); 

}

module.exports = userLoggedMiddleware;