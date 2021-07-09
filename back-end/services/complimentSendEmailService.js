const nodemailer = require("nodemailer");
const smtpConfig = require("../config/smtp");

var transport = nodemailer.createTransport({
  host: smtpConfig.host,
  port: smtpConfig.port,
  auth: {
    user: smtpConfig.user,
    pass: smtpConfig.pass,
  }
});

module.exports = async (userSenderName, userSenderEmail, userReceiverEmail, message) => {
  const from = `${userSenderName} <${userSenderEmail}>`
  const mailSent = await transport.sendMail({
    text: message,
    subject: "Você recebeu um elogio",
    from: from,
    to: userReceiverEmail,
  });

  console.log(mailSent);
};

// COMO ENVIAR UM HTML COMO TEXTO DA MENSAGEM?
