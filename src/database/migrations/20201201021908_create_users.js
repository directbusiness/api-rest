
exports.up = function(knex) {
  return knex.schema.createTable('users' ,function(table){
    table.increments('id').primary();
    // table.string('first_name').notNullable();
    // table.string('last_name').notNullable();
    table.text('user_name').unique().unique().notNullable();
    table.string('user_password').unique().notNullable();
    // table.string('user_randomic_id').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    // table.string('company_id').notNullable();
    // table.string('address_id').notNullable();

    //table.foreign('company_id').references('company.id');
    //table.foreign('address_id').references('addresses.id');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');  
};
