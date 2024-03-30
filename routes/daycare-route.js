const router = require('express').Router();
const daycareController = require('../controllers/daycare-controller');

router.route('/daycares').get(daycareController.index);

router.route('/daycares')
  .get(daycareController.index)
  .post(daycareController.createDaycare);

  router.route("/daycares/:id")
  .get(daycareController.findOne)

module.exports = router;
