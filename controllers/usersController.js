const path = require("path");
const fs = require("fs")
const bcrypt = require("bcryptjs");
const usersPath = path.resolve(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
const {validationResult} = require('express-validator');


const controllerUser = {
    register: (req,res) => {
        res.render('./users/register')
    },
    login: (req,res) => {
       return res.render('./users/login')
    },
    
    store: (req,res) =>{
        const resultValidation = validationResult(req);
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
        
        let userRegister = users.find( oneUser => oneUser.email=== req.body.email);
        if (userRegister){
            return res.render('./users/register', {
                errors: {
                    email:{
                        msg: 'Email ya registrado'
                    }
                },
               oldDate:req.body
            });
        }
        
        if (users.length) {
            users.push({
                id: generateID(),
                fullName: req.body.fullName,
                usuario: req.body.usuario,
                email: req.body.email,
                clave: bcrypt.hashSync(req.body.clave, 10),
                image: req.file.filename,
                fecha: req.body.fecha,
                direccion: req.body.direccion,
                genero: req.body.genero
            })
        } else {
            users.push({
                id: 1,                    // Revisar    
                fullName: req.body.fullName,
                usuario: req.body.usuario,
                email: req.body.email,
                clave: bcrypt.hashSync(req.body.clave, 10),
                image: req.file.filename,
                fecha: req.body.fecha,
                direccion: req.body.direccion,
                genero: req.body.genero
            })
        }
        
        fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));
        
        return res.redirect('/user/login');
    },
    
    loginProcess: (req, res) => {
       const validacionLogin = validationResult(req)
       if(validacionLogin.errors.length){
           return res.render('./users/login', {errors: validacionLogin.mapped(),oldDate:req.body})
        }
        
        // 1. validar que el usuario que quiere loguearse este en la dataBase 
        const userToLogin= users.find( oneUser => oneUser.email=== req.body.email);
        console.log(userToLogin)
           
        // 2. validar que la contraseña sea la misma que la guardada
        if (userToLogin){
            const passwordCorrect = bcrypt.compareSync(req.body.clave, userToLogin.clave);
       // 3. guardar al "userLogged" en Session - 
             if (passwordCorrect){
                 
                 // 4. borrar el password del user que tenemos almacenado en sesion          
                 delete userToLogin.clave;
                 req.session.userLogged = userToLogin;
                 // 5. Redireccionamos a users/profileUsers
                }
                if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 5}) // seteo de cookie
                }
                return res.redirect("/user/profile")      
          
            }
    },
    
    profile: (req,res) => {
        console.log(req.session)
        res.render('./users/profile' , {
            users: req.session.userLogged   //estoy pasando a la vista la variable users
        })                               
    },
    
    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
    }

}

module.exports = controllerUser;