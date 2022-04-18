const path = require("path");
const fs = require("fs")
const bcrypt = require("bcryptjs");
const usersPath = path.resolve(__dirname, "../data/users.json");
//const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
const {validationResult} = require('express-validator');
const {User, Genre} = require("../src/database/models");
/*const db = require("../src/database/models");*/


const controllerUser = {
    // Ruta por GET para mostrar vista 
    register: (req,res) => {
        res.render('./users/register')
    },
    // Ruta por GET para mostrar vista
    login: (req,res) => {
      return  res.render('./users/login') 
    },

    create: async(req, res) => {
        try {
            const genero = await Genre.findAll({})
            
            
            return res.render('./user/register', {Genre})
        } catch (error) {
            console.log(error)
        }
        
    },
    // Ruta por POST proceso de Registro
    store: async(req, res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length){
            return res.render('./users/register', {errors: resultValidation.mapped(),oldDate:req.body})
        }
        const postUser = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            //image:req.file.filename,
            

        }
       console.log(postUser)
        
        try {
            const UserStored = await User.create(postUser) 
            return res.redirect('./login');
            
        } catch (error) {
            console.log(error)
        }

    },
    //Ruta por GET proceso de modificacion de profile
    editProfile: function(req,res) {
        User.findByPk(req.params.id)
            .then(function(userEdit){
              res.render('./users/editProfile', {userEdit:userEdit});

            })
    },

    //Ruta por POST proceso de modificacion de profile 
    update: function (req,res){
        User.update({
        fullName:req.body.fullName,
        user:req.body.user,
        eMail:req.body.eMail,
        password:req.body.password,
        genre:req.body.genre,
        dateBirth:req.body.dateBirth,
        country:req.body.country,
        address:req.body.address,

       }, {
           where: {
               id: req.params.id
           }
       })
       // redirecciono a la pagina donde estaba el usuario con su id
       // ver si no es conveniente cambiar todo para que sea por eMail
       res.redirect("/user/editProfile/" + req.params.id)
    },
    
   
    // Ruta por POST proceso de login
    loginProcess: async (req, res) => {
        const validacionLogin = validationResult(req)
       if(validacionLogin.errors.length){
           return res.render('./users/login', {errors: validacionLogin.mapped(),oldDate:req.body})
        }
        
        // 1. validar que el usuario que quiere loguearse este en la dataBase 
        
        const userToLogin= await User.findOne({
            where: {
                eMail: req.body.eMail
            }
        });
        console.log(userToLogin)
        
        // 2. validar que la contraseña sea la misma que la guardada
        if (userToLogin){
            const passwordCorrect = bcrypt.compareSync(req.body.password, userToLogin.password);
       // 3. guardar al "userLogged" en Session - 
             if (passwordCorrect){
                 
                 // 4. borrar el password del user que tenemos almacenado en sesion          
                 delete userToLogin.password;
                 req.session.userLogged = userToLogin;
                 // 5. Redireccionamos a users/profileUsers
                }
                if(req.body.remember_User){
                    res.cookie('userEmail', req.body.eMail, {maxAge: (1000 * 60) * 5}) // seteo de cookie
                }
                return res.redirect("/user/profile")      
          
            }
    },
    
    // Ruta por GET para mostrar vista
    profile: (req,res) => {
        console.log(req.session)
        return res.render('./users/profile' , {
            users: req.session.userLogged   //estoy pasando a la vista la variable users
            
        })                               
    },
    // Ruta por POST proceso de logout
    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
    }
    
}

module.exports = controllerUser;





//*****************CODIGO UTILIZADO PARA CUANDO TRABAJABAMOS CON DB JSON ***********


/*store: (req,res) =>{
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
},*/
