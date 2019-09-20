const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

console.log(process.env.JWT_SECRET);

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.use('/api', )
// server.use('/api', )
// server.use('/api', )

server.get('/', (req, res) => {
    res.send("YOOOO");
});

module.exports = server;