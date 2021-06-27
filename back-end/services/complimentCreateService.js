const { Compliment } = require("../models");
const complimentSenderReceiverSame = require("./complimentSenderReceiverSameService");
const complimentValidUsersService = require("./complimentValidUsersService");
const complimentSendEmailService = require('./complimentSendEmailService');

module.exports = async (data) => {
  const { userSender, userReceiver } = data;

  if (!(await complimentValidUsersService(userSender, userReceiver))) {
    throw new Error("Usuários inválidos");
  }

  if (complimentSenderReceiverSame(userSender, userReceiver)) {
    throw new Error("Usuário de destino inválido");
  }

  const newCompliment = await Compliment.create(data);
  complimentSendEmailService();

  return newCompliment;
};
