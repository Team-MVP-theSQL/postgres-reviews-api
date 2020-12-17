require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.get('/loaderio-63c9a1bcc35a46f06329f2b0c74d49d5.txt', (req, res) => {
  res.send('loaderio-63c9a1bcc35a46f06329f2b0c74d49d5');
});
app.use('/api', router);

module.exports = app;
