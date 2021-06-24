const { User } = require("../models");
const { hash } = require('bcryptjs');
const userEmailExists = require("./userEmailExistsService");
const userHasValidEmail = require("./userHasValidEmailService");

module.exports = async (userData) => {
  const { name, email, password, admin } = userData;
  
  if (!userHasValidEmail(email)) {
    throw new Error("Email incorreto");
  }

  if (await userEmailExists(email)) {
    throw new Error(`Email ${email} já existe`);
  }

  const passwordHash = await hash(password, 8);

  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
    admin,
  });
  return newUser;
};
