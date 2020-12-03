const knexdb = require("../dbConfig");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knexdb('users').del()
    .then(function () {
      // Inserts seed entries
      return knexdb('users').insert([
        { user_name: 'mirim' },
        { user_name: 'luis' },
        { user_name: 'renan' }

      ]);
    });
};
