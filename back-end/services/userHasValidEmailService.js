const validator = require("email-validator");

module.exports = (email) => {
  if (email && validator.validate(email)) return true;
  return false;
};
