const { Tag } = require('../models');

module.exports = async () => {
  const tags = await Tag.findAll({
    order: ['name'],
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  return tags;
};