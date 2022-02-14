const path = require("path");
const fs = require("fs")

const usersPath = path.resolve(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

function autoLoginMiddelware (req, res, next){
    const emailInCookie = req.cookies.userEmail; 

    if (emailInCookie !== undefined){ 
        const userToLogin = users.find(oneUser => oneUser.email === emailInCookie);
        delete userToLogin.password;
        req.sesion.userLogged = userToLogin;
    }
next();

}

module.exports = autoLoginMiddelware;
