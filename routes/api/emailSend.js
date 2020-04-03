const router = require('express').Router();
const controller = require('../../controllers/controller.js');

router.route('/email', (req, res) => {
    console.log("here");
});
    // .post(controller.sendEmailToSelf);

module.exports = router;