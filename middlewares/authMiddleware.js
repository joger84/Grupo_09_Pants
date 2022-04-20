/*** MIDDLEWARE PARA LIMITAR QUE SI NO ESTAS LOGUEADO E INGRESAS A PROFILE
 O A CREAR O EDITAR UN PRODUCTO =====> TE RE DIRECCIONO A LOGIN */

function authMiddleware (req, res, next){
    if (req.session.userLogged ===undefined){
        return res.redirect("/user/login");
    }

    next ();
}

module.exports = authMiddleware;
