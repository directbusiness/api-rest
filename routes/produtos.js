const express = require('express');
const router = express.Router();

router.get('/produtos', function(req, res, next){
    res.status(200).send({
        mensagem: "Usando o GET na rota produtos"
    });
});

router.post('/produtos', function(req, res, next){
    res.status(201).send({
        mensagem: "Usando o POST na rota protudos"
    });
});

module.exports = router;