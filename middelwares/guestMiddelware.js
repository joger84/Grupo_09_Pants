/******MIDDELWARE QUE LIMITA LAS RUTAS A LAS QUE PUEDE ACCEDER EL USUARIO *********/
/******************VA EN REGISTER Y EN LOGIN************** */

function guestMiddelware (req, res, next){
    if (req.session.userLogged !== undefined){ // si es distinto de undef...entonces hay alguien logueado
        return res.redirect("/user/profileUsers"); /* te redirecciono a profile*/
    }
    next();

}

module.exports = guestMiddelware;