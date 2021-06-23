const { User } = require("../models");

module.exports = async (userData) => {
  // const { name, email, password, admin } = userData;
  const newUser = User.create(userData);
  return newUser;
};
