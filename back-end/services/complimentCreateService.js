const { Compliment } = require("../models");
const complimentSenderReceiverSame = require("./complimentSenderReceiverSameService");
const complimentValidUsersService = require("./complimentValidUsersService");

module.exports = async (data) => {
  const { userSender, userReceiver } = data;

  if (!(await complimentValidUsersService(userSender, userReceiver))) {
    throw new Error("Usuários inválidos");
  }

  if (complimentSenderReceiverSame(userSender, userReceiver)) {
    throw new Error("Usuário de destino inválido");
  }

  const newCompliment = await Compliment.create(data);
  return newCompliment;
};
