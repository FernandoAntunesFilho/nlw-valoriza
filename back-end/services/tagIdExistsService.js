const { Tag } = require("../models");

module.exports = async (tagId) => {
  const tag = await Tag.findByPk(tagId);

  if (tag) return true;
  return false;
};
