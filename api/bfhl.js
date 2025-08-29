const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');
const { handleBFHL } = require('../controllers/bfhlController');

const app = express();

app.use(cors({ origin: '*', methods: ['POST'], allowedHeaders: ['Content-Type'] }));
app.use(bodyParser.json());

app.post('/bfhl', handleBFHL);

module.exports = app;
module.exports.handler = serverless(app);
