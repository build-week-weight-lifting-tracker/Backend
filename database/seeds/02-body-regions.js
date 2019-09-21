
exports.seed = function(knex, Promise) {
      return knex('body_region').insert([
        {id: 1, region: 'chest'},
        {id: 2, region: 'back'},
        {id: 3, region: 'arms'},
        {id: 4, region: 'legs'},
        {id: 5, region: 'abs/core'},
      ]);
};
