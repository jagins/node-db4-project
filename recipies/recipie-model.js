const database = require('../data/db-config');

function getRecipies()
{
    return database('recipies')
}

function getShoppingList(recipie_id)
{
    /*select ri.recipie_id,
		r.recipie_name,
		i.ingredient_name,
		ri.quanity,
		ri.unit
    from recipie_ingredients ri 
    join recipies as r On ri.recipie_id = r.id 
    join ingredients as i On ri.ingredients_id = i.id
    where ri.recipie_id = 1
    */
   return database.select('recipie_ingredients.recipie_id',
        'recipies.recipie_name',
        'ingredients.ingredient_name',
        'recipie_ingredients.quanity',
        'recipie_ingredients.unit')
        .from('recipie_ingredients')
        .join('recipies', 'recipie_ingredients.recipie_id', 'recipies.id')
        .join('ingredients', 'recipie_ingredients.id', 'ingredients.id')
        .where('recipie_ingredients.recipie_id', recipie_id);
}

function getIntructions(recipie_id)
{
    /* SELECT	s.step_number,
		s.step 
    from steps s 
    join recipies as r ON s.instruction_id = r.id 
    WHERE s.instruction_id = 1
    */

    return database.select('steps.step_number', 'steps.step')
            .from('steps')
            .join('recipies', 'steps.instruction_id', 'recipies.id')
            .where('steps.instruction_id', recipie_id);
}

module.exports = {
    getRecipies,
    getShoppingList,
    getIntructions
}