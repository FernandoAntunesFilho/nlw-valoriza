const { User } = require("../models");

module.exports = async (req, res, next) => {
  const { userSender } = req;

  const { admin } = await User.findByPk(userSender);

  if (admin) return next();
  return res.status(401).json({ error: "Unauthorized" });
};
