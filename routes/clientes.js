const express = require('express');
const route = express.Router();

route.get('/clientes', (req, res, next) => {
    res.status(200).send({
        mensagem: "Voce usou o mentodo GET na rota clientes"
    });
});

route.post('/clientes', (req, res, next) => {
    res.status(201).send({
        mensagem: "Voce usou o metodo POST na rota de clientes"
    });
});

route.delete('/clientes', (req, res, next) => {
    res.status(200).send({
        mensagem: "Utilizando o metodo DELETE na rota clientes"
    });
})

module.exports = route;