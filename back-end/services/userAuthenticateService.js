const { User } = require("../models");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
require("dotenv");
const userEmailExists = require("./userEmailExistsService");

module.exports = async (data) => {
  const { email, password } = data;

  if (!(await userEmailExists(email))) {
    throw new Error("Email ou Senha incorreto");
  }

  const user = await User.findOne({
    where: {
      email,
    },
  });

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) {
    throw new Error("Email ou Senha incorreto");
  }

  const token = sign({ email: user.email }, process.env.SECRET, {
    subject: (user.id).toString(),
    expiresIn: "1d",
  });

  return token;
};
