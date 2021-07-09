const { Compliment } = require("../models");
const complimentSenderReceiverSame = require("./complimentSenderReceiverSameService");
const complimentValidUsersService = require("./complimentValidUsersService");
const complimentSendEmailService = require("./complimentSendEmailService");
const userGetEmailService = require("./userGetEmailService");
const userGetNameService = require("./userGetNameService");

module.exports = async (data) => {
  const { userSender, userReceiver, message } = data;

  if (!(await complimentValidUsersService(userSender, userReceiver))) {
    throw new Error("Usuários inválidos");
  }

  if (complimentSenderReceiverSame(userSender, userReceiver)) {
    throw new Error("Usuário de destino inválido");
  }

  const newCompliment = await Compliment.create(data);
  const userReceiverEmail = await userGetEmailService(userReceiver);
  const userSenderEmail = await userGetEmailService(userSender);
  const userSenderName = await userGetNameService(userSender);
  complimentSendEmailService(userSenderName, userSenderEmail, userReceiverEmail, message);

  return newCompliment;
};
