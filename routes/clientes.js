const express = require('express');
const router = express.Router();

router.get('/clientes', function (req, res, next) {
    res.status(200).send({
        mensagem: "Voce usou o mentodo GET na rota clientes"
    });
});

router.post('/clientes', function (req, res, next) {
    res.status(201).send({
        mensagem: "Voce usou o metodo POST na rota de clientes"
    });
});

module.exports = router;