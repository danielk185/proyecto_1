const bcryptjs = require('bcryptjs')
const connection = require('../../config/db')


module.exports = app => {
    app.get('/', (req, res) => {
        if (req.session.loggedin) {
            res.render('../views/principal.ejs', {
                login: true,
                nombres: req.session.nombres,
                apellidos: req.session.apellidos,
                fk_id_rol: req.session.fk_id_rol,
                fk_id_unidad: req.session.fk_id_unidad
            })
        } else {
            res.render('../views/principal.ejs', {
                login: false,
                nombres: "",
                apellidos: "",
                fk_id_rol: "",
                fk_id_unidad: ""
            })
        }

    })


    app.get('/cronograma', (req, res) => {
        if (req.session.loggedin) {
            res.render('../views/cronograma.ejs', {
                login: true,
                nombres: req.session.nombres,
                apellidos: req.session.apellidos,
                fk_id_rol: req.session.fk_id_rol,
                fk_id_unidad: req.session.fk_id_unidad
                
            })
        } else {
            res.render('../views/cronograma.ejs', {
                login: false,
                nombres: "",
                apellidos: "",
                fk_id_rol: "",
                fk_id_unidad: ""

                
            })
        }
        
        
    })


    app.post('/cronograma', async (req, res) => {
     const { titulo, cargo_at, descripcion, fecha, hora} = req.body;
    //Query para registro de usuario
     connection.query("INSERT INTO eventos SET ?", {
            titulo: titulo,

            cargo_at: cargo_at,

            descripcion: descripcion,

            fecha: fecha,

            hora: hora
        })
        res.send("recibido")
    })
    


    app.get('/eventos', (req, res) => {
        if (req.session.loggedin) {
            res.render('../views/eventos.ejs', {
                login: true,
                nombres: req.session.nombres,
                apellidos: req.session.apellidos,
                fk_id_rol: req.session.fk_id_rol,
                fk_id_unidad: req.session.fk_id_unidad
            })
        } else {
            res.render('../views/eventos.ejs', {
                login: false,
                nombres: "",
                apellidos: "",
                fk_id_rol: "",
                fk_id_unidad: ""
            })
        }
        
    })


    app.get('/familia', (req, res) => {
        if (req.session.loggedin) {
            res.render('../views/familia.ejs', {
                login: true,
                nombres: req.session.nombres,
                apellidos: req.session.apellidos,
                fk_id_rol: req.session.fk_id_rol,
                fk_id_unidad: req.session.fk_id_unidad
            })
        } else {
            res.render('../views/familia.ejs', {
                login: false,
                nombres: "",
                apellidos: "",
                fk_id_rol: "",
                fk_id_unidad: ""
            })
        }
        
    })


    app.get('/manada', (req, res) => {
        if (req.session.loggedin) {
            res.render('../views/manada.ejs', {
                login: true,
                nombres: req.session.nombres,
                apellidos: req.session.apellidos,
                fk_id_rol: req.session.fk_id_rol,
                fk_id_unidad: req.session.fk_id_unidad
            })
        } else {
            res.render('../views/manada.ejs', {
                login: false,
                nombres: "",
                apellidos: "",
                fk_id_rol: "",
                fk_id_unidad: ""
            })
        }
        
    })


    app.get('/tropa', (req, res) => {
        if (req.session.loggedin) {
            res.render('../views/tropa.ejs', {
                login: true,
                nombres: req.session.nombres,
                apellidos: req.session.apellidos,
                fk_id_rol: req.session.fk_id_rol,
                fk_id_unidad: req.session.fk_id_unidad
            })
        } else {
            res.render('../views/tropa.ejs', {
                login: false,
                nombres: "",
                apellidos: "",
                fk_id_rol: "",
                fk_id_unidad: ""
            })
        }
        
    })


    app.get('/pioneros', (req, res) => {
        if (req.session.loggedin) {
            res.render('../views/pioneros.ejs', {
                login: true,
                nombres: req.session.nombres,
                apellidos: req.session.apellidos,
                fk_id_rol: req.session.fk_id_rol,
                fk_id_unidad: req.session.fk_id_unidad
            })
        } else {
            res.render('../views/pioneros.ejs', {
                login: false,
                nombres: "",
                apellidos: "",
                fk_id_rol: "",
                fk_id_unidad: ""
            })
        }
        
    })


    app.get('/clan', (req, res) => {
        if (req.session.loggedin) {
            res.render('../views/clan.ejs', {
                login: true,
                nombres: req.session.nombres,
                apellidos: req.session.apellidos,
                fk_id_rol: req.session.fk_id_rol,
                fk_id_unidad: req.session.fk_id_unidad
            })
        } else {
            res.render('../views/clan.ejs', {
                login: false,
                nombres: "",
                apellidos: "",
                fk_id_rol: "",
                fk_id_unidad: ""
            })
        }
        
    })

    app.get('/estado', (req, res) => {
        if (req.session.loggedin) {
            res.render('../views/estado.ejs', {
                login: true,
                nombres: req.session.nombres,
                apellidos: req.session.apellidos,
                fk_id_rol: req.session.fk_id_rol,
                fk_id_unidad: req.session.fk_id_unidad
            })
        } else {
            res.render('../views/estado.ejs', {
                login: false,
                nombres: "",
                apellidos: "",
                fk_id_rol: "",
                fk_id_unidad: ""
            })
        }
        
    })


    app.get('/ingreso', (req, res) => {
        res.render('../views/ingreso.ejs')

    })


    app.get('/registro', (req, res) => {
        //Bloquear vistas
        if (req.session.loggedin) {
            res.redirect('/');
        } else {
            res.render('../views/registro.ejs')
        }

    })


    app.get('/logout', (req, res) => {
        req.session.destroy(() => {
            res.redirect('/')
        })
    })

    app.post('/registro', async(req, res) => {

        const { nombres, apellidos, id, correo, pass, fk_id_unidad } = req.body;
        let fk_id_rol = 4;
        console.log(req.body);
        let passwordHaash = await bcryptjs.hash(pass, 8);
        //Query para registro de usuario
        connection.query("INSERT INTO usuario SET ?", {

            id: id,

            nombres: nombres,

            apellidos: apellidos,

            correo: correo,

            pass: passwordHaash,

            fk_id_rol: fk_id_rol,

            fk_id_unidad: fk_id_unidad

        }, async(error, results) => {

            if (error) {

                res.send(error);

            } else {

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



   

// -----------------aletar de conexión exitosa o fallida del ingreso
    app.post('/auth', (req, res) => {
        const { id, pass } = req.body

        if (id && pass) {
            connection.query('SELECT * FROM usuario WHERE id = ?', [id], async(err, results) => {
                if (results.length === 0 || !(await bcryptjs.compare(pass, results[0].pass))) { //Usuario no existe || Contrasena incorrecta
                    //SWAL2 para error:
                    res.render('../views/ingreso.ejs', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Usuario y/o contraseña incorrecta",
                        alertIcon: "error",
                        showConfirmButton: false,
                        timer: false,
                        ruta: 'ingreso'
                    })
                } else {
                    req.session.loggedin = true;
                    req.session.nombres = results[0].nombres;
                    req.session.apellidos = results[0].apellidos;
                    req.session.fk_id_unidad = results[0].fk_id_unidad;
                    req.session.fk_id_rol = results[0].fk_id_rol;
                   
                    
                    //SWAL2 para correcto:
                    res.render('../views/ingreso.ejs', {
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