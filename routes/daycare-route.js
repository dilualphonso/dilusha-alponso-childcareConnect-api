const router = require('express').Router();
const daycareController = require('../controllers/daycare-controller');

router.route('/daycares').get(daycareController.index);

module.exports = router;
