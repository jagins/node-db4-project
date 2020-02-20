const database = require('../data/db-config');

function getRecipies()
{
    return database('recipies')
}

module.exports = {
    getRecipies
}