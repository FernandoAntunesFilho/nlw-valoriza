const { Compliment, User, Tag } = require("../models");

module.exports = async (userId) => {
  const complimentsReceived = await Compliment.findAll({
    where: {
      userReceiver: userId,
    },
    include: [
      { model: User, as: "sender", attributes: ["name"] },
      { model: Tag, as: "tag", attributes: ["name"] },
    ],
    attributes: {
      exclude: ["userSender", "userReceiver", "updatedAt", "tagId"],
    },
  });
  return complimentsReceived;
};
