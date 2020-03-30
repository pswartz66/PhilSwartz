const router = require('express').Router();
const emailRoute = require('./emailSend');

router.use('/send', emailRoute);

module.exports = router;