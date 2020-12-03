const express = require('express');
const route = express.Router();

route.get('/produtos', (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando o GET na rota produtos"
    });
});


route.get('/produtos/:id', (req, res, next) => {
    const id = req.params.id

    if (id === 'especial') {
        res.status(200).send({
            mensagem: "Consultando um produto com ID " + id
        });

    } else {
        res.status(200).send({
            //id: id,
            mensagem: "Voce consultou um produto com ID " + id
        });
    };
});


route.post('/produtos', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o POST na rota protudos"
    });
});


route.delete('/produtos', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o metodo DELETE para a rota produtos"
    });
});


route.delete('/produtos:id', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: "Usando o metodo DELETE para um id ",
            //id: id
        });

    } else {
        res.status(200).send({
            mensagem: "O ID do produto deletado é " + id
        });
    };
});


module.exports = route;