
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Recipe1'},
        {name: 'Recipe2'},
        {name: 'Recipe3'}
      ]);
    });
};
