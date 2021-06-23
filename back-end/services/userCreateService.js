const { User } = require("../models");
const userEmailExists = require("./userEmailExistsService");
const userHasValidEmail = require("./userHasValidEmailService");

module.exports = async (userData) => {
  const { email } = userData;
  
  if (!userHasValidEmail(email)) {
    throw new Error("Email incorreto");
  }

  if (await userEmailExists(email)) {
    throw new Error(`Email ${email} já existe`);
  }

  const newUser = await User.create(userData);
  return newUser;
};
