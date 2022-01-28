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
            // 2. Obtenemos el ID de ese último producto
            const lastID = lastUser.id;
            // 3. Retornamos ese último ID incrementado en 1
            return lastID + 1;
        }
        if (users.length) {
            users.push({
                id: generateID(),
                fullName: req.body.fullName,
                usuario: req.body.usuario,
                email: req.body.email,
                clave: req.body.clave,
                confirmClave: req.body.confirmClave,
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
                fecha: req.body.fecha,
                direccion: req.body.direccion,
                genero: req.body.genero
            })
        }

        fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));

        return res.redirect('/user/login');
    }

}

module.exports = controllerUser;