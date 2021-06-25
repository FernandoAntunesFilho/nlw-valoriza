module.exports = async (req, res) => {
  const userId = req.userSender;
  const complimentsSent = await complimentReceiveService(userId);
  res.status(200).json(complimentsSent);
};