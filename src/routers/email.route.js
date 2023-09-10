const router = require('express').Router();
const emailController = require('../controllers/email.controller');

router.post('/send-email',  emailController.sendEmail);

module.exports = router;
