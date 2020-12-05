
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {country_code: '+55', area_code: '93', number_phone: '991135662', is_whatsapp: 'true'},
        {country_code: '+55', area_code: '93', number_phone: '30174878', is_whatsapp: 'true'},
      ]);
    });
};
