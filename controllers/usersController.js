const path = require("path");
const fs = require("fs")
const bcrypt = require("bcryptjs");
const usersPath = path.resolve(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
const {validationResult} = require('express-validator');
const { render } = require("ejs");

const controllerUser = {
    login: (req,res) => {
        res.render('./users/login')
    },
    register: (req,res) => {
        res.render('./users/register')
    },
 
    store: (req,res) =>{
        const resultValidation = validationResult(req);
        
        // return res.send(resultValidation.mapped())
        if(resultValidation.errors.length){
            return res.render('./users/register', {errors: resultValidation.mapped(),oldDate:req.body})
        }
        const generateID = () => {
            const lastUser = users[users.length - 1];
            // 2. Obtenemos el ID de ese último usuario
            const lastID = lastUser.id;
            // 3. Retornamos ese último ID incrementado en 1
            return lastID + 1;
        }
       //const dataBody = req.body;
       //delete dataBody.confirmClave
                    //pasar en el PUSH 'dataBody' en vez de req.body
        
        if (users.length) {
            users.push({
                id: generateID(),
                fullName: req.body.fullName,
                usuario: req.body.usuario,
                email: req.body.email,
                clave: req.body.clave,
                image: req.file.filename,
                fecha: req.body.fecha,
                direccion: req.body.direccion,
                genero: req.body.genero
            })
        } else {
            users.push({
                id: 1,
                fullName: req.body.fullName,
                usuario: req.body.usuario,
                email: req.body.email,
                clave: req.body.clave,
                image: "default",
                fecha: req.body.fecha,
                direccion: req.body.direccion,
                genero: req.body.genero
            })
        }
        
        fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));
        
        return res.redirect('/users/login');
    },

     loginProcess: (req, res) => {
       // 1. validar que el usuario que quiere loguearse este en la dataBase 
         const userToLogin= users.find( oneUser => oneUser.usuario=== req.body.usuario);

       // 2. validar que la contraseña sea valida con el user (compara con la bcrypt)
       if (userToLogin){
             const passwordCorrect = bcrypt.compareSync(req.body.clave, userToLogin.clave);
       // 3. guardar al "userLogged" en Session - usa esa variable asi no rompe los codigos que siguen en profile
             if (passwordCorrect){
       // 4. borrar el password del user que tenemos almacenado en sesion          
             delete userToLogin.clave;
             req.session.userLogged = userToLogin;
       // 5. Redireccionamos a users/profileUsers
            }
            console.log(userToLogin)
            return res.redirect("/user/profile" , {userToLogin})      
            
      }
    },

    profile: (req,res) => {
       res.render('./users/profileUsers', {
            user: req.session.userLogged  // en la variable user estamos pasando el usuario que se logueo
        })                                // por eso en la vista pasamos la variable "user" 
       
    },
    
    logout: (req, res) => {
		res.clearCookie("userEmail");
		req.session.destroy();
		return res.redirect("/");
	}

}

module.exports = controllerUser;