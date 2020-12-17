const router = require('express').Router();
const controller = require('./controller.js');

router.route('/reviews/:shoeid')
  .get(controller.getShoeReviews);

module.exports = router;