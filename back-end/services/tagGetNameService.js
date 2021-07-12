const { Tag } = require("../models");

module.exports = async (tagId) => {
  tagName = await Tag.findByPk(tagId)
  return tagName.dataValues.name
}