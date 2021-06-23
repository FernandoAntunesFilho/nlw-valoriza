const { Tag } = require("../models");
const tagHasValidName = require("./tagHasValidNameService");
const tagNameExists = require('./tagNameExistsService');

module.exports = async (name) => {
  if (!tagHasValidName(name)) {
    throw new Error("A tag não possui um nome válido");
  }

  if (await tagNameExists(name)) {
    throw new Error(`A tag ${name} já existe`);
  }

  const newTag = await Tag.create({ name });
  return newTag;
};
