require('dotenv').config();
const nodemailer = require('nodemailer');

exports.sendEmail = async (to, subject, message) => {
    try {

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass:  process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from:  process.env.EMAIL_USER,
            to: to,
            subject: subject,
            text: message
        };

        await transporter.sendMail(mailOptions);
    } catch (err) {
        throw err;
    }
};