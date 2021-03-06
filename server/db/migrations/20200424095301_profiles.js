const table = 'profiles'
exports.up = (knex) =>
  knex.schema.createTable(table, (t) => {
    t.increments('id').primary()
    t.string('user_id')
      .references('users.id')
      // Added from stack overflow answer:
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    t.string('firstname')
    t.string('lastname')
    t.string('age')
    t.string('bio')
  })

exports.down = (knex) => knex.schema.dropTable(table)
