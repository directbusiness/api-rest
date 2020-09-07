const express = require('express');
const route = express.Router();

route.get('/clientes', function (req, res, next) {
    res.status(200).send({
        mensagem: "Voce usou o mentodo GET na rota clientes"
    });
});

route.post('/clientes', function (req, res, next) {
    res.status(201).send({
        mensagem: "Voce usou o metodo POST na rota de clientes"
    });
});

module.exports = route;