module.exports = async (req, res) => {
  const tags = await tagListService();
  res.status(200).json(tags);
};
