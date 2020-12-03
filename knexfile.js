// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST || '127.0.0.1',
      port: process.env.PG_PORT || '5432',
      database: process.env.PG_DATABASE || 'erp-sgrm_os',
      user: process.env.PG_USERNAME || 'postgres',
      password: process.env.PG_PASSWORD || '4651554155'
    },

    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      directory: './src/database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
  },
};
