const express = require('express');
const route = express.Router();

route.get('/services', (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando metodo GET na rota de Serviços"
    });
});
route.get('/services/:id', (req, res, next) => {
    const id = req.params.id
    res.status(200).send({
        mensagem: "Usando metodo GET na rota de Serviços com ID: " + id
    });
});

route.post('/services', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o metodo POST na rota de serviços"
    });
});

module.exports = route;