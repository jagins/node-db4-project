
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipie_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipie_ingredients').insert([
        {
          recipie_id: 1,
          ingredients_id: 1,
          quanity: 1,
          unit: 'part'
        },
        {
          recipie_id: 1,
          ingredients_id: 2,
          quanity: 1,
          unit: 'part'
        },
        {
          recipie_id: 1,
          ingredients_id: 3,
          quanity: 1,
          unit: 'part'
        },
        {
          recipie_id: 2,
          ingredients_id: 4,
          quanity: 2,
          unit: 'cups'
        },
      ]);
    });
};
