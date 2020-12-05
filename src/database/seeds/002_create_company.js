
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {company_name: 'DTN Soltions', comercial_name: 'DATANET TRANSIT NETWORK'},
        {company_name: 'NTS Soltions', comercial_name: 'NETWORK TRANSIT SOLUTIONS'}
      ]);
    });
};
