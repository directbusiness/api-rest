
exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.blob('atached'); //Anexos 

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        // table.string('user_id').notNullable();
        // table.string('client_id').notNullable();
        // table.string('contact_id').notNullable();
        // table.string('addresses_id').notNullable();

        // table.foreign('user_id').references('id').inTable('users');
        // table.foreign('client_id').references('id').inTable('clients');
        // table.foreign('contact_id').references('id').inTable('contacts');
        // table.foreign('addresses_id').references('id').inTable('addresses');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('incidents');
};