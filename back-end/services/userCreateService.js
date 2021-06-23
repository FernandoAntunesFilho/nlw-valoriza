const { User } = require("../models");
const userEmailExists = require('./userEmailExistsService');

module.exports = async (userData) => {
  const { email } = userData;

  if (await userEmailExists(email)) {
    throw new Error(`Email ${email} já existe`)
  }

  const newUser = User.create(userData);
  return newUser;
};
