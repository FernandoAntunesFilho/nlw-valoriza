const { Tag } = require("../models");
const tagHasValidName = require("./tagHasValidNameService");

module.exports = async (name) => {
  if (!tagHasValidName(name)) {
    throw new Error("A tag não possui um nome válido");
  }

  const newTag = await Tag.create({ name });
  return newTag;
};
