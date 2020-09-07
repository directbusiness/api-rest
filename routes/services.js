const express = require('express')
const route = express.Router()

route.get('/services', function (req, res, next) {
    res.status(200).send({
        mensagem: "Usando metodo GET na rota de Serviços"
    })
})

route.post('/services', function (req, res, next) {
    res.status(201).send({
        mensagem: "Usando o metodo POST na rota de serviços"
    })
})

module.exports = route;