const Review = require('../db/Reviews.js');
const db = require('../db/');

const controller = {
  getAll: (req, res) => {
    Review.findAll()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  deleteAll: (req, res) => {
    Review.destroy({ truncate: true })
      .then(() => {
        res.status(200).send('Deleted all entries');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  // post: (req, res) => {
  //   Review.create(req.body)
  //     .then(() => {
  //       res.status(200).send('Entry posted');
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err);
  //     });
  // },
  getShoeReviews: (req, res) => {
    Review.findAll({ where: { shoeid: req.params.shoeid } })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getOneReview: (req, res) => {
    Review.findByPk(req.params.id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  // put: (req, res) => {
  //   Review.updateOne({ _id: req.params.id }, req.body )
  //     .then(() => {
  //       res.status(200).send('Entry updated');
  //     })
  //     .catch((err) => {
  //       res.status(500).send(err);
  //     });
  // },
  // deleteOne: (req, res) => {
  //   Review.deleteOne({ _id: req.params.id })
  //     .then(() => {
  //       res.status(200).send('Deleted entry');
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err);
  //     });
  // }
};

module.exports = controller;