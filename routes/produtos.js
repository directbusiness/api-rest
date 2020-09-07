const express = require('express');
const route = express.Router();

route.get('/produtos', function(req, res, next){
    res.status(200).send({
        mensagem: "Usando o GET na rota produtos"
    });
});

route.post('/produtos', function(req, res, next){
    res.status(201).send({
        mensagem: "Usando o POST na rota protudos"
    });
});

module.exports = route;