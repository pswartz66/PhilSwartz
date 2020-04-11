const router = require('express').Router();
const controller = require('../controllers/controller');

router.route('/email').post(controller.sendEmailToSelf);

module.exports = router;
