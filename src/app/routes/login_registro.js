//rutas
const bcryptjs = require('bcryptjs')
const connection = require('../../config/server')
module.exports = app => {
    app.get('/', (req,res) => {
        if(req.session.loggedin){
            res.render('../views/index.ejs',{
                login: true,
                name: req.session.name
            })
        } else {
            res.render('../views/index.ejs',{
                login: false,
                name: "Por favor inicie sesión"
            })
        }
        
    })

    app.get('/ingreso', (req, res) => {
        res.render ('../views/ingreso.ejs')
    })

    app.get('/registro', (req, res) => {
        res.render ('../views/registro.ejs')
    })


    app.get('/logout', (req, res) => {
        req.session.destroy( () => {
            res.redirect('/')
        })
    })

    //solicitud con el método post en el registro 
    
    app.post('/registro', async (req,res) => {

        const {user, name, rol, pass} = req.body;

        let passwordHaash = await bcryptjs.hash(pass, 8);

        connection.query("INSERT INTO users SET ?", {

            user: user,

            name: name,

            rol: rol,

             pass: passwordHaash

        }, async (error, results) => {

            if (error) {

                res.send(error);

            }   else {

                res.render('../views/registro.ejs', {
                    alert: true,
                    alertTitle: "Registration",
                    alertMessage: "Succesful Registration",
                    alertIcon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                    ruta: ''
                })

            }

        })

    })
    //metodo post para autenticar en el login
    app.post('/auth',async (req, res) =>{
        const {user,pass} = req.body
        let passwordHaash = await bcryptjs.hash(pass, 8)

        if (user && pass) {
            connection.query('SELECT * FROM users WHERE user = ?',[user],async(err,results) =>{
                if (results.length ===0 || !(await bcryptjs.compare(pass, results[0].pass))){
                   //SWAL2 para error:
                   res.render ('../views/ingreso.ejs',{
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Usuario y/o contraseña incorrecta",
                    alertIcon: "error",
                    showConfirmButton: false,
                    timer: false,
                    ruta: 'login'
                   })
                } else {
                    req.session.loggedin = true
                    req.session.name = results[0].name
                    //SWAL2 para correcto:
                   res.render ('../views/ingreso.ejs',{
                    alert: true,
                    alertTitle: "Conexión exitosa",
                    alertMessage: "Bienvenido",
                    alertIcon: "success",
                    showConfirmButton: false,
                    timer: false,
                    ruta: ''
                   })
                }
            })
        }
    })
}

