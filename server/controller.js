const db = require('../db/');

const controller = {
  getShoeReviews: (req, res) => {
   db.query('SELECT * FROM reviews WHERE id = $1', [`${req.params.shoeid}`])
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
   // res.send('great success');
  }
};

module.exports = controller;
