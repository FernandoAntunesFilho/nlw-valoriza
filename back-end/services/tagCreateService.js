const { Tag } = require("../models");

module.exports = async (name) => {
  const newTag = Tag.create({ name });
  return newTag;
};
