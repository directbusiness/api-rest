const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaProdutos = require('./routes/posts');
const rotaClientes = require('./routes/users');
const rotaServices = require('../src/routes/services');

app.use(express.json());
app.use(morgan('dev'));

app.use(rotaProdutos);
app.use(rotaClientes);
app.use(rotaServices);

// console.log(process.env)

module.exports = app;