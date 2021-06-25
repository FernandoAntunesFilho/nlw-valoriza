const { User } = require("../models");

module.exports = async () => {
  const users = await User.findAll({
    order: ["name"],
    attributes: { exclude: ["password", "admin"] },
  });
  return users;
};
