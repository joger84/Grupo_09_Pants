/******MIDDLEWARE QUE LIMITA LAS RUTAS A LAS QUE PUEDE ACCEDER EL USUARIO *********/
/******************VA EN REGISTER Y EN LOGIN************** */

function guestMiddleware (req, res, next){
    if (req.session.userLogged !== undefined){ // si es distinto de undef...entonces hay alguien logueado
        return res.redirect("/user/login"); /* si no estas logueado te redirecciono a profile*/
    }
    next(); // si estas logueado podes seguir

}

module.exports = guestMiddleware;