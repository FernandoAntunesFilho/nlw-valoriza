const { User } = require("../models");

module.exports = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user) return true;
  return false;
};
