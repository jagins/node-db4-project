
exports.up = function(knex) {
  return knex.schema
    .createTable('recipies', table =>
    {
        table.increments();
        table.string('recipie_name', 255)
            .unique()
            .notNullable();
    })
    .createTable('instructions', table =>
    {
        table.increments();
        table.integer('recipie_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipies')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('steps', table =>
    {
        table.increments();
        table.integer('step_number')
            .unsigned()
            .notNullable();
        table.string('step', 255)
            .notNullable();
        table.integer('instruction_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('instructions')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('ingredients', table =>
    {
        table.increments();
        table.string('ingredient_name', 255)
            .unique()
            .notNullable();
    })
    .createTable('recipie_ingredients', table =>
    {
        table.increments();
        table.integer('recipie_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipies')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.float('quanity')
            .unsigned()
            .unique()
            .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipie_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipies');
};
