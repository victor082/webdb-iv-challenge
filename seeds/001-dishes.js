
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Dish1'},
        {name: 'Dish2'},
        {name: 'Dish3'}
      ]);
    });
};
