const userAuthenticateService = require('../services/userAuthenticateService');

module.exports = async (req, res) => {
  const data = req.body;
  const token = await userAuthenticateService(data);
  res.status(200).json({ token });
};
