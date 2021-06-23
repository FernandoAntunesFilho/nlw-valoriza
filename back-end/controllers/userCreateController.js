const userCreateService = require('../services/userCreateService');

module.exports = async (req, res) => {
  const userData = req.body;
  const newUser = await userCreateService(userData);
  res.status(200).json(newUser);
};
