const complimentCreateService = require("../services/complimentCreateService");

module.exports = async (req, res) => {
  const data = req.body;
  const { userSender } = req;

  data.userSender = userSender;

  const result = await complimentCreateService(data);
  res.status(200).json(result);
};
