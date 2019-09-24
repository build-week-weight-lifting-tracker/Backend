
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
      tbl
        .increments();
      tbl
        .string('first_name', 128)
        .notNullable();
      tbl
        .string('last_name', 128)
        .notNullable();
      tbl
        .string('email', 128)
        .notNullable()
        .unique();
      tbl
        .string('username', 128)
        .notNullable()
        .unique();
      tbl
        .string('password', 128)
        .notNullable()
        .unique();
      tbl
        .timestamp('created')
        .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
