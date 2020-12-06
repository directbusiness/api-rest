
exports.up = function (knex) {
    return knex.schema.createTable('addresses', function (table) {
        table.increments('id').primary();
        table.string('streets').notNullable();
        table.string('number').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        // table.string('zipcode').notNullable();
        // table.string('district').notNullable();
        // table.string('country').notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        // table.string('user_id').notNullable();
        // table.string('client_id').notNullable();

        // table.foreign('user_id').references('id').inTable('users');
        // table.foreign('client_id').references('id').inTable('clients');

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('addresses');
};
