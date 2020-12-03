
exports.up = knex => knex.schema.createTable('posts', table => {
    table.increments('id').primary();
    table.string('title').unique().notNullable();
    table.string('content');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

});

exports.down = knex => knex.schema.dropTable('posts');
