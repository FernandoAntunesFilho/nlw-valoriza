const nodemailer = require("nodemailer");
const smtpConfig = require("../config/smtp");

const transporter = nodemailer.createTransport({
  // host: smtpConfig.host,
  // port: smtpConfig.port,
  service: "gmail",
  secure: false,
  auth: {
    user: smtpConfig.user,
    pass: smtpConfig.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = async () => {
  const mailSent = await transporter.sendMail({
    text: "Texto da mensagem",
    subject: "Você recebeu um elogio",
    from: "Fernando Antunes <fernando.antunes1@gmail.com>",
    to: "fernando.antunes1@gmail.com",
  });

  console.log(mailSent);
};