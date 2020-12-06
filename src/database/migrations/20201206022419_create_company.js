
exports.up = function (knex) {
    return knex.schema.createTable('company', function (table) {
        table.increments('id').primary();
        table.string('company_name').notNullable();
        table.string('cmercial_name').notNullable();
        // table.string('company_cnpj').notNullable();
        // table.string('company_ie').notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        // table.string('company_address').notNullable();
        // table.string('company_contact').notNullable();

        // table.foreign('company_address').references('id').inTable('addresses');
        // table.foreign('company_contact').references('id').inTable('contacts');

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('company');
};