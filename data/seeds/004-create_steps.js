
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_number: 1, 
          step: 'Combine sugar, spice and everything nice into a bowl',
          instruction_id: 1
        },
        {
          step_number: 2, 
          step: 'Hope for the best',
          instruction_id: 1
        },
        {
          step_number: 1, 
          step: 'preheat oven to 450',
          instruction_id: 2
        },
        {
          step_number: 1, 
          step: 'slice apples',
          instruction_id: 3
        },
      ]);
    });
};
