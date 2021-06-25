const { Compliment, User } = require("../models");

module.exports = async (userId) => {
  const complimentsReceived = await Compliment.findAll({
    where: {
      userReceiver: userId,
    },
    include: [{ model: User, as: "sender" }],
  });
  return complimentsReceived;
};
