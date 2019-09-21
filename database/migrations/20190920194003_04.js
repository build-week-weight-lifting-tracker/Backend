
exports.up = function(knex, Promise) {
  return knex.schema.createTable('region_exercise', tbl => {
      tbl
        .integer('exercise_id')
        .unsigned()
        .notNullable()
        .references('exercise')
        .inTable('exercises')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .integer('region_id')
        .unsigned()
        .notNullable()
        .references('region')
        .inTable('body_region')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .primary(['exercise_id', 'region_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('region_exercise');
};
