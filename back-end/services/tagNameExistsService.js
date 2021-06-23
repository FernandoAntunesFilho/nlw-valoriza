const { Tag } = require("../models");

module.exports = async (name) => {
  const tag = await Tag.findOne({
    where: {
      name,
    },
  });

  if (tag) return true;
  return false;
};
