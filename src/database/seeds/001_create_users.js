
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([

        { user_name: 'mirim', user_password: '102030' },
        { user_name: 'luis', user_password: 'l00' },
        { user_name: 'renan', user_password: 'r00' },
        { user_name: 'naylla', user_password: 'n00' }

      ]);

    });
};
