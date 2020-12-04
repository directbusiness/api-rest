const express = require('express');
const app = express();
const morgan = require('morgan');

const routes = require('./routes/routes');

app.use(express.json());
app.use(morgan('dev'));

app.use(routes);

routes.get('/', function (req, res, next) {
    return res.json({
        mensagem: "Bem vindo a API-REST de postagens para estudos"
    })
})

// console.log(process.env)

module.exports = app;