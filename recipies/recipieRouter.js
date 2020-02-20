const express = require('express');

const Recipies = require('./recipie-model');

const router = express.Router();

router.get('/', (req, res) =>
{
    res.json({message: 'recipies'});
})

module.exports = router;