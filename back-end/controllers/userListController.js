const userListService = require("../services/userListService");

module.exports = async (req, res) => {
  const users = await userListService();
  res.status(200).json(users);
};
