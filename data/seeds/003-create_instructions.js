
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipie_id: 1},
        {recipie_id: 2},
        {recipie_id: 3}
      ]);
    });
};
