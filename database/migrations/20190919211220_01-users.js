
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();

      tbl.string('first_name', 128)
      .notNullable()
      .unique();
      tbl.string('last_name', 128)
      .notNullable();
      tbl.string('email', 128)
      .notNullable();
      tbl.string('username', 128)
      .notNullable();
      tbl.string('password', 128)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
