require('dotenv').config();

const Server = require('./models/server');

//Instanciamos un objeto de la clase Server para crear el servidor
const server = new Server();

//Llamamos el metodo listen() de la instancia server para que empiece a escuchar peticiones
server.listen();