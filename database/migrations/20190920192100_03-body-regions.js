
exports.up = function(knex, Promise) {
  return knex.schema.createTable('body_region', tbl => {
      tbl
        .increments()
      tbl
        .string('region')
        .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('body_region');
};
