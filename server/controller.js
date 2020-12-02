let Reviews = require('../db/Reviews.js');
let db = require('../db/');

let controller = {
  get: (req, res) => {
    Reviews.find({})
      .then((data) => {
        const index = Math.floor(Math.random() * data.length)
        res.status(200).send(data[index]);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  post: (req, res) => {
    Reviews.create(req.body)
      .then(() => {
        res.status(200).send('Entry posted');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  delete: (req, res) => {
    Reviews.deleteMany({})
      .then(() => {
        res.status(200).send('Deleted all entries');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
};

module.exports = controller;