
exports.up = function (knex) {
    return knex.schema.createTable('contacts', function (table) {
        table.increments('id').primary();
        table.string('country_code').unique().notNullable();
        table.string('area_code').notNullable();
        table.string('number_phone').notNullable();
        table.boolean('is_whatsapp');
        // table.string('email').unique().notNullable();
        // table.string('others_info').notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        // table.string('contact_user_id').notNullable();
        // table.string('contact_client_id').notNullable();

        // table.foreign('contact_user_id').references('id').inTable('users');
        // table.foreign('contact_client_id').references('id').inTable('clients');

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('contacts');
};