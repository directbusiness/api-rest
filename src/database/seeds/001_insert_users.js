exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([

        { user: 'mirim', password: '102030' },
        { user: 'luis', password: 'l00' },
        { user: 'renan', password: 'r00' },
        { user: 'naylla', password: 'n00' }

      ]);

    });
};