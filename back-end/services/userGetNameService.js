const { User } = require("../models");

module.exports = async (userId) => {
  userName = await User.findByPk(userId)
  return userEmail.dataValues.name
}