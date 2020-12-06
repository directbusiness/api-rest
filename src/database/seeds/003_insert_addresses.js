
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        { state: 'Pará', city: 'Santarém', streets: 'Av. Sergio Henn', number: '35' },
        { state: 'Paraná', city: 'Maringa', streets: 'Av. Julio Campos', number: '1309' },
      ]);
    });
};
