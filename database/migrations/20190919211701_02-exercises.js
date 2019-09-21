
exports.up = function(knex, Promise) {
  return knex.schema.createTable('exercises', tbl => {
      tbl
        .increments()
      tbl
        .string('exercise')
      tbl
        .string('exercise_description', 1000)
      tbl
        .string('weight_lbs')
      tbl
        .string('reps')
      tbl
        .timestamp('created').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('exercises');
};
