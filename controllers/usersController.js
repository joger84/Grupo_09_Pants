const path = require("path");
const fs = require("fs")

const usersPath = path.resolve(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

const controllerUser = {
    login: (req,res) => {
        res.render('./users/login')
    },
    register: (req,res) => {
        res.render('./users/register')
    },
 
    store: (req,res) =>{
        const generateID = () => {
            const lastUser = users[users.length - 1];
            // 2. Obtenemos el ID de ese último usuario
            const lastID = lastUser.id;
            // 3. Retornamos ese último ID incrementado en 1
            return lastID + 1;
        }

       //*************  ---  ALE LO VALIDAS POR FAVOR???  (SOFI)--- *****************
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
                confirmClave: req.body.confirmClave,
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
                confirmClave: req.body.confirmClave,
                image: "default",
                fecha: req.body.fecha,
                direccion: req.body.direccion,
                genero: req.body.genero
            })
        }
        
        fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));
        
        return res.redirect('/user/login');
    },

    // procesLogin: (req, res) => {
       // 1. validar que el usuario que quiere loguearse este en la dataBase 
    
       // 2. validar que la contraseña sea valida con el user (compara con la bcrypt)

       // 3. guardar al "userLogged" en Session - usa esa variable asi no rompe los codigos que siguen en profile
        
       // 4. borrar el password del user que tenemos almacenado en sesion

       // 5. Redireccionamos a users/profileUsers
    
    //},

    profile: (req,res) => {
        res.render('/users/profileUsers', {
            user: req.session.userLogged
        })
    },
    
    logout: (req, res) => {
		res.clearCookie("userEmail");
		req.session.destroy();
		return res.redirect("/");
	}

}

module.exports = controllerUser;