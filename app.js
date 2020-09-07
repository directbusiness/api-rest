const express = require('express');
const app = express();

const rotaProdutos = require('./routes/produtos');
const rotaClientes = require('./routes/clientes');
const rotaServices = require('./routes/services')

app.use(rotaProdutos);
app.use(rotaClientes);
app.use(rotaServices);

module.exports = app;