//***************MIDDELWARE QUE VALIDA QUE TENGAMOS UN USUARIO LOGUEADO**************/
// Si tengo un usuario logueado lo que hacemos es una variable Local para poder acceder desde cualquier 
// parte de la app (vistas incluidas).
// al ser un MDW de app por seguridad SIEMPRE vamos a decir que el usuario NO esta logueado
// entonces cuando tenemos un Usuario logueado sigue con el flujo normal.

function userLoggedMiddelware (req, res, next){
    res.local.usuerAlreadyLogged = false;

    if (req.session.userLogged !== undefined){
        res.locals.usuerAlreadyLogged = true;
        res.locals.users = {
            name: req.session.userLogged.fullName,
            avatarImg: req.session.userLogged.avatar,
        }
    }
    next();
}

module.exports = userLoggedMiddelware;