module.exports = async (req, res) => {
  const data = req.body;
  res.status(200).json(data);
};
