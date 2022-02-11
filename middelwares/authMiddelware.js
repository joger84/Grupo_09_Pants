function authMiddelware (req, res, next){
    if (req.session.userLogged ===undefined){
        console.log('no ingresaste')
        return res.redirect("/user/login");
    }

    next ();
}

module.exports = authMiddelware;