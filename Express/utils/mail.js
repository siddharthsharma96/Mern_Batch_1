const nodemailer = require('nodemailer');
const { text } = require('express');

const sendEmail = async (options) => {
  // 1. Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 25,
    auth: {
      user: '2d097f09f41ccf',
      pass: 'dbfa4890e2494e',
    },
  });

  // 2.Define email options
  const mailOptions = {
    from: 'sid@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 3. send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
