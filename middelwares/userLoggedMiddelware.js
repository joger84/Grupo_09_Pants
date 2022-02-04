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