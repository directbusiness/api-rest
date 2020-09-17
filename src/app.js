const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaProdutos = require('../routes/produtos');
const rotaClientes = require('../routes/clientes');
const rotaServices = require('../routes/services');

app.use(morgan('dev'));

app.use(rotaProdutos);
app.use(rotaClientes);
app.use(rotaServices);

module.exports = app;