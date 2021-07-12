const { Compliment } = require("../models");
const complimentSenderReceiverSame = require("./complimentSenderReceiverSameService");
const complimentValidUsersService = require("./complimentValidUsersService");
const complimentSendEmailService = require("./complimentSendEmailService");
const userGetEmailService = require("./userGetEmailService");
const userGetNameService = require("./userGetNameService");
const tagGetNameService = require('./tagGetNameService');

module.exports = async (data) => {
  const { userSender, userReceiver, message, tagId } = data;

  if (!(await complimentValidUsersService(userSender, userReceiver))) {
    throw new Error("Usuários inválidos");
  }

  if (complimentSenderReceiverSame(userSender, userReceiver)) {
    throw new Error("Usuário de destino inválido");
  }

  const newCompliment = await Compliment.create(data);
  const userReceiverEmail = await userGetEmailService(userReceiver);
  const userReceiverName = await userGetNameService(userReceiver);
  const userSenderEmail = await userGetEmailService(userSender);
  const userSenderName = await userGetNameService(userSender);
  const tagName = await tagGetNameService(tagId);
  
  complimentSendEmailService(
    userSenderName,
    userSenderEmail,
    userReceiverName,
    userReceiverEmail,
    message,
    tagName,
  );

  return newCompliment;
};
