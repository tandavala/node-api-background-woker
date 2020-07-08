const nodemailer = require("nodemailer");

const defaultEmailFrom = process.env.DEFAULT_EMAIL_FROM;

const mailerTransport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = ({ from = defaultEmailFrom, to, subject, text }) => {
  return mailerTransport.sendMail({
    from,
    to,
    subject,
    text,
  });
};

module.exports = { sendEmail };
