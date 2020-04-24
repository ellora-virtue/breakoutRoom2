const table = 'sessions'
exports.up = (knex) =>
  knex.schema.createTable(table, (t) => {
    t.increments('id').primary()
    t.string('user_id')
      .references('users.id')
      // Added from stack overflow answer:
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    t.integer('duration')
    t.string('experience')
    t.integer('rating')
    t.string('focus')
  })

exports.down = (knex) => knex.schema.dropTable(table)
