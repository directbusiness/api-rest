
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        {street: 'Av. Sergio henn', number:'35', city:'Santarém', state:'PARÁ'},
        {street: 'Av. Moaçara', number:'3509', city:'Santarém', state:'PARÁ'},
      ]);
    });
};
