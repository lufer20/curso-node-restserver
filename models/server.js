const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';//endpoint principal de usuarios

        //Middlewares
        this.middlewares();

        //Rutas de la aplicacion
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        //Lectura y Parseo del body
        this.app.use( express.json() );

        //Directorio Publico
        this.app.use( express.static( 'public' ) );

    }

    routes() {

        //Establecemos como un middleware condicional para las rutas asociadas a los usuarios
        this.app.use( this.usuariosPath , require('../routes/usuarios'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${ this.port }`);
        });
    }

}

module.exports = Server;