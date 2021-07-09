require("dotenv");

module.exports = {
  host: process.env.HOST,
  port: process.env.GMAIL_PORT,
  user: process.env.MAIL_USER,
  pass: process.env.PASS,
};
