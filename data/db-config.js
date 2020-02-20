const knex = req('knex');

const config = require('../knexfile');

module.exports = knex(config.development);