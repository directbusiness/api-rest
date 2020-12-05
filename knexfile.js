// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.PG_HOST || '127.0.0.1',
      port: process.env.PG_PORT,
      database: process.env.PG_DATABASE,
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD
    },

    pool: {
      min: 2,
      max: 10
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
