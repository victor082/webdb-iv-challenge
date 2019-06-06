// Update with your config settings.

module.exports = {

  development: {
      client: 'sqlite3',
      connection: {
        filename: './data/dev.sqlite.db3',
      },
      useNullAsDefault: true, // needed for sqlite
      migrations: {
        directory: './migrations'
      },
      seeds: {
        directory: './seeds'
      },
  },

};