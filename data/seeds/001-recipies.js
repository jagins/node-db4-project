
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipies').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipies').insert([
        {recipie_name: 'PowerPuff Girls'},
        {recipie_name: 'New York Style Cheescake'},
        {recipie_name: 'American Apple Pie'}
      ]);
    });
};
