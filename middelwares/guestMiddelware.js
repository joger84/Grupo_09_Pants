function guestMiddelware (req, res, next){
    if (req.session.userLogged !== undefined){
        return res.redirect("/users/profileUsers");
    }
    next();

}

module.exports = guestMiddelware;