
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'ingredient1'},
        {name: 'ingredient2'},
        {name: 'ingredient3'}
      ]);
    });
};
