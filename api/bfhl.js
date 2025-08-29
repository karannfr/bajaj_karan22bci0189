const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();

const corsOptions = {
  origin: '*',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/', require('../routes/bfhl'));

module.exports = app;
module.exports.handler = serverless(app);
