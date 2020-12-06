const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes/routes');
const errors = require('./errors');

app.use(express.json());
app.use(morgan('dev'));

app.use(errors.error);
app.use(routes);

routes.get('/', function (req, res, next) {
    try {
        return res.json({
            message: 'Bem vindo a API-REST',
            name: "api-rest",
            version: "1.0.0",
            description: "API com nodeJS e express",
            author: "Ademar Tellecher"
        })

    } catch (error) {
        next(error);
    }
})

console.log(process.env)

module.exports = app;