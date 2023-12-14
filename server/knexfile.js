// Update with your config settings.
var dotenv = require("dotenv");

dotenv.config({ path: ".env" });

console.log(process.env.POSTGRES_URL);

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 * 
 * 

 */

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/heia.db3",
    },
    searchPath: ["knex", "public"],
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
      // enforce table relationships
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: process.env.POSTGRES_URL,
      ssl: { rejectUnauthorized: false },
    },
    user: process.env.POSTGRES_USER,
    port: 5432,
    password: process.env.POSTGRES_PASSWORD,
    sslmode: true,
    debug: true,
    searchPath: ["knex", "public"],
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
