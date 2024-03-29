const path = require("path");
const fs = require("fs")
//const usersPath = path.resolve(__dirname, "../data/users.json");
//const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
const {User} = require("../src/database/models");

function autoLoginMiddleware (req, res, next){
    const emailInCookie = req.cookies.userEmail; 

    if (emailInCookie !== undefined){ 
        const userToLogin = User.findOne(oneUser => oneUser.eMail === emailInCookie);
        delete userToLogin.password;
        req.sesion.userLogged = userToLogin;
    }
next();

}

module.exports = autoLoginMiddleware;
