// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST || 'localhost',
      port: process.env.PG_PORT || '5432',
      user: process.env.PG_USERNAME || 'apirest',
      password: process.env.PG_PASSWORD || '0000',
      database: process.env.PG_DATABASE || 'db-api-rest'
    },

    migrations: {
      directory: `${__dirname}/src/database/migrations`,
      tableName: 'knex_migrations'
    },

    seeds: {
      directory: `${__dirname}/src/database/seeds`
    },
  },
};
