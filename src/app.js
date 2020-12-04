const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes/routes');
const errors = require('./errors');

app.use(express.json());
app.use(morgan('dev'));

app.use(routes);
app.use(errors.tryCatch);

routes.get('/', function (req, res, next) {
    try {
        return res.json({
            mensagem: "Bem vindo a API-REST de postagens para estudos"
        })

    } catch (error) {
        next(error);
    }
})
// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({ error: error.message });
// })

module.exports = app;