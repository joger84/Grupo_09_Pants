//***************MIDDELWARE QUE VALIDA QUE TENGAMOS UN USUARIO LOGUEADO**************/
// Si tengo un usuario logueado lo que hacemos es una variable Local para poder acceder desde cualquier 
// parte de la app (vistas incluidas).
// al ser un MDW de app por seguridad SIEMPRE vamos a decir que el usuario NO esta logueado
// entonces cuando tenemos un Usuario logueado sigue con el flujo normal.

function userLoggedMiddelware (req, res, next){
    res.local.userAlreadyLogged = false;

    if (req.session.userLogged !== undefined){ 
        res.locals.userAlreadyLogged = true;
        res.locals.users = {
            usuario: req.session.userLogged.fullName, // tiene que ser = a la DB - esta ok como fullname
            avatarImg: req.session.userLogged.avatar,
        }
    }
    next();
    }

module.exports = userLoggedMiddelware;