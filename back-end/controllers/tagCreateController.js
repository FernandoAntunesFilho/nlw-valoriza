module.exports = async (req, res) => {
  const { name } = req.body;
  const newTag = await tagCreateService(name);
  res.status(200).json(newTag);
};
