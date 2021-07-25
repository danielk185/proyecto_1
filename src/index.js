const app = require('./config/server') //Servidor configurado
const connecion = require('./config/db')

require('./app/routes/inicio')(app)

//Escuchar en el puerto al servidor
app.listen(app.get('port'), () => {

    console.log("Servidor en el puerto: ", app.get('port'))

})