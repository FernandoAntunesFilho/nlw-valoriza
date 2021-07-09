const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");
const smtpConfig = require("../config/smtp");

var transport = nodemailer.createTransport({
  host: smtpConfig.host,
  port: smtpConfig.port,
  auth: {
    user: smtpConfig.user,
    pass: smtpConfig.pass,
  },
});

module.exports = async (
  userSenderName,
  userSenderEmail,
  userReceiverName,
  userReceiverEmail,
  message
) => {
  ejs.renderFile(
    path.join(__dirname, "../templates/email.ejs"),
    { message, userReceiverName, userSenderName },
    async (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const from = `${userSenderName} <${userSenderEmail}>`;
        const mailSent = await transport.sendMail({
          html: data,
          subject: "Você recebeu um elogio",
          from: from,
          to: userReceiverEmail,
        });

        console.log(mailSent);
      }
    }
  );
};

// COMO ENVIAR UM HTML COMO TEXTO DA MENSAGEM?
