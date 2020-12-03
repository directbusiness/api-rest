const express = require('express');
const knexdb = require('../database/dbConfig');
const route = express.Router();

route.get('/users', (req, res, next) => {

    knexdb('users').then((results) => {
        return res.json(results);
    });
});

route.get('/users/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        mensagem: "Voce usou o mentodo GET na rota users " + id
    });
});

route.post('/users', (req, res, next) => {
    res.status(201).send({
        mensagem: "Voce usou o metodo POST na rota de users"
    });
});

route.delete('/users/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        mensagem: "Utilizando o metodo DELETE na rota users " + id
    });
})

module.exports = route;