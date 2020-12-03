let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let cors = require('cors');
let db = require('../db');
let router = require('./router.js');

let app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api', router);

module.exports = app;


