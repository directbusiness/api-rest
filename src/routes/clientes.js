const express = require('express');
const route = express.Router();

route.get('/clientes', (req, res, next) => {
    res.status(200).send({
        mensagem: "Voce usou o mentodo GET na rota clientes"
    });
});
route.get('/clientes:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        mensagem: "Voce usou o mentodo GET na rota clientes " + id
    });
});

route.post('/clientes', (req, res, next) => {
    res.status(201).send({
        mensagem: "Voce usou o metodo POST na rota de clientes"
    });
});

route.delete('/clientes:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        mensagem: "Utilizando o metodo DELETE na rota clientes " + id
    });
})

module.exports = route;