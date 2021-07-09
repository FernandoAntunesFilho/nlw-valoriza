const { User } = require("../models");

module.exports = async (userId) => {
  userEmail = await User.findByPk(userId)
  return userEmail.dataValues.email
}