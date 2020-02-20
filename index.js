const express = require('express');

const recipieRouter = require('./recipies/recipieRouter');

const server = express();

server.use(express.json());

server.use('/api/recipies', recipieRouter);

server.get('/', (req, res) =>
{
    res.json({message: 'working'});
})

const PORT = 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));