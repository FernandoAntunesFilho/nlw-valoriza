const { Compliment, User, Tag } = require("../models");

module.exports = async (userId) => {
  const complimentsSend = await Compliment.findAll({
    where: {
      userSender: userId,
    },
    include: [
      { model: User, as: "receiver", attributes: ["name"] },
      { model: Tag, as: "tag", attributes: ["name"] },
    ],
    attributes: {
      exclude: ["userSender", "userReceiver", "updatedAt", "tagId"],
    },
  });
  return complimentsSend;
};
