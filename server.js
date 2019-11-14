const express = require('express');

// const db = require('./data/dbConfig.js');
// 5
const AccountRouter = require('./routers/accounts-router.js');

const server = express();

server.use(express.json());

// 6
server.use('/api/accounts', AccountRouter);

// 7
server.get('/', (req, res) => {
    res.send('<h1>Test!</h1>')
});


module.exports = server;