const complimentReceiveService = require("../services/complimentReceiveService");

module.exports = async (req, res) => {
  const userId = req.userSender;
  const complimentsReceived = await complimentReceiveService(userId);
  res.status(200).json(complimentsReceived);
};
