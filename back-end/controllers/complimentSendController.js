const complimentSendService = require("../services/complimentSendService");

module.exports = async (req, res) => {
  const userId = req.userSender;
  const complimentsSent = await complimentSendService(userId);
  res.status(200).json(complimentsSent);
};
