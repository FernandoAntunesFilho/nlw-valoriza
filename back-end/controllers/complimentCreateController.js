const complimentCreateService = require('../services/complimentCreateService');

module.exports = async (req, res) => {
  const data = req.body;
  const result = await complimentCreateService(data);
  res.status(200).json(result);
};
