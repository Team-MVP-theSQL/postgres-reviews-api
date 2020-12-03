let router = require('express').Router();
let controller = require('./controller.js');

router.route('/reviews')
  .get(controller.getAll)
  .delete(controller.deleteAll)
  .post(controller.post)

router.route('/reviews/:shoeId')
  .get(controller.getShoeReviews)

router.route('/review/:id')
  .put(controller.put)
  .delete(controller.deleteOne);

module.exports = router;