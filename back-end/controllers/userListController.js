module.exports = async (req, res) => {
  const users = await userListService();
  res.status(200).json(users);
};