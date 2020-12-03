const knexfile = require('../../knexfile');
const knexdb = require('knex')(knexfile['development']);

module.exports = knexdb;