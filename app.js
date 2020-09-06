const express = require('express');
const app = express();

const rotaProdutos = require('./routes/produtos');
const rotaClientes = require('./routes/clientes');

app.use(rotaProdutos);
app.use(rotaClientes);

module.exports = app;