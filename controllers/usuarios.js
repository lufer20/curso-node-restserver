const { request, response } = require('express');//Requerimos la funcion request y response solo para que nos sirva de ayuda para autocompletar

const usuarioGet = (req = request, res= response) => {

    // const query = req.query;
    const { q, nombre = 'No Name', apikey, page = 1, limit } = req.query;

    res.json({
        // ok: true, No es necesario enviarlo porque con la respuesta se envia el status que nos sirve para saber el estado de la respuesta
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res) => {

    //Recibir parametros enviados en el body de la peticio
    const { nombre, edad } = req.body;

    res.status(201).json({
        // ok: true, No es necesario enviarlo porque con la respuesta se envia el status que nos sirve para saber el estado de la respuesta
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req = request, res) => {

    //Recibir parametros enviados en el endpoint /:id
    const { id } = req.params;


    res.status(500).json({
        // ok: true, No es necesario enviarlo porque con la respuesta se envia el status que nos sirve para saber el estado de la respuesta
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        // ok: true, No es necesario enviarlo porque con la respuesta se envia el status que nos sirve para saber el estado de la respuesta
        msg: 'patch API - Controlador'
    });
}

const usuariosDelete =  (req, res) => {
    res.json({
        // ok: true, No es necesario enviarlo porque con la respuesta se envia el status que nos sirve para saber el estado de la respuesta
        msg: 'delete API - Controlador'
    });
}

module.exports = {
    usuarioGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}