const express = require('express');

const Recipies = require('./recipie-model');

const router = express.Router();

router.get('/', (req, res) =>
{
    Recipies.getRecipies()
    .then(recipies =>
    {
        res.status(200).json(recipies);
    })
    .catch(error =>
    {
        res.status(500).json({error: 'Unable to get recipies'});
    })
})

router.get('/:id/shopplingList', (req, res) =>
{
    Recipies.getShoppingList(req.params.id)
    .then(getShoppingList =>
    {
        res.status(200).json(getShoppingList);
    })
    .catch(error =>
    {
        res.status(500).json({error: 'Could not retrieve shopping list from database'});
    })
})

router.get('/:id/getInstructions', (req, res) =>
{
    Recipies.getIntructions(req.params.id)
    .then(instructions =>
    {
        res.status(200).json(instructions);
    })
    .catch(error =>
    {
        res.status(500).json({message: 'Could not get instructions from the database'});
    })
})
module.exports = router;