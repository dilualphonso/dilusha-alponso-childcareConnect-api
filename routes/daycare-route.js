const router = require('express').Router();
const daycareController = require('../controllers/daycare-controller');

router.route('/daycares').get(daycareController.index);

router.route('/daycares')
  .get(daycareController.index)
  .post(daycareController.createDaycare);

module.exports = router;
