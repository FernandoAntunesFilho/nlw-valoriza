const { Compliment } = require("../models");

module.exports = async (data) => {
  const newCompliment = await Compliment.create(data);
  return newCompliment;
};
