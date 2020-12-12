const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('../db');
require('newrelic');
const router = require('./router.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

module.exports = app;
