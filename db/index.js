let mongoose = require('mongoose');
let mongoUri = 'mongodb://localhost/reviews';
mongoose.promise = global.Promise;

var db = mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Database connected');
  });

module.exports = db;
