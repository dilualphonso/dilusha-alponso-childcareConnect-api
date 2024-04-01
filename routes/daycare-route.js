const router = require('express').Router();
const daycareController = require('../controllers/daycare-controller');
const reviewController = require('../controllers/review-controller')

router.route('/daycares').get(daycareController.index);

router.route('/daycares')
  .get(daycareController.index)
  .post(daycareController.createDaycare);

  router.route("/daycares/:id")
  .get(daycareController.findOne)


  router.route("/daycares/:id/reviews")
  .get(reviewController.getReview)

  router.route("/daycares/:id/reviews")
  .post(reviewController.postReview)



module.exports = router;
