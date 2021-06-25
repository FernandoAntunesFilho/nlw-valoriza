const { Compliment } = require("../models");
const complimentSenderReceiverSame = require('./complimentSenderReceiverSameService');

module.exports = async (data) => {
  const { userSender, userReceiver } = data;

  if (complimentSenderReceiverSame(userSender, userReceiver)) {
    throw new Error("Usuário de destino inválido");
  }

  const newCompliment = await Compliment.create(data);
  return newCompliment;
};
