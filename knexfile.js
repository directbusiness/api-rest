// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE
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
