const { User } = require("../models");

module.exports = async (idUserSender, idUserReceiver) => {
  const userSender = await User.findByPk(idUserSender);
  const userReceiver = await User.findByPk(idUserReceiver);

  if (!userSender || !userReceiver) return false;
  return true;
};
