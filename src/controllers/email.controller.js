const emailService = require('../services/email.service');

exports.sendEmail = async (req, res) => {
    try {
        const { to, subject, message } = req.body;
        await emailService.sendEmail(to, subject, message);
        res.status(200).json({ message: 'Email successfully sent' });

    } catch (err) {
        console.log(err)
        res.status(500).json({ errors: [{ location: req.path, msg: 'Error sending the e-mail. Detail: ' + err.detail, param: null }] });
    }
};
