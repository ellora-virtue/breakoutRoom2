const table = 'users'
exports.seed = (knex) =>
  knex(table)
    .del()
    .then(() =>
      knex(table).insert([
        {
          id: 1,
          username: 'test1',
          password:
            '$2b$10$rd5AxTo6o70d.0EIQ1QLCeKY5X/qCDzIjUKTqg1nKbamxmF8PFcfC'
        },
        {
          id: 2,
          username: 'test2',
          password:
            '$2b$10$rd5AxTo6o70d.0EIQ1QLCeKY5X/qCDzIjUKTqg1nKbamxmF8PFcfC'
        }
      ])
    )
