const router = require('express').Router();
const controller = require('../../controllers/controller.js');

router.route('/email')
    .post(controller.sendEmailToSelf);

module.exports = router;
