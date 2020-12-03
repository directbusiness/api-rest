exports.up = function (knex) {
    return knex.schema.createTeble('users', (table) => {
        table.increments('id').primary()
        table.text('name').unique().notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = knex => knex.schema.dropTable('users'); // simplificando a função por fazer apenas um retorno
