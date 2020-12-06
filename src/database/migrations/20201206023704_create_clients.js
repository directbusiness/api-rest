
exports.up = function (knex) {
    return knex.schema.createTable('clients', function (table) {
        table.increments('id').primary();
        table.string('firnt_name').notNullable();
        table.string('last_name').notNullable();
        // table.string('birth_date').notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        // table.string('address_id').notNullable();
        // table.string('contact_id').notNullable();

        // table.foreign('address_id').references('id').inTable('addresses');
        // table.foreign('contact_id').references('id').inTable('contacts');

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('clients');
};