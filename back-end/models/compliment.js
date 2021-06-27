const complimentModel = (sequelize, DataTypes) => {
  const Compliment = sequelize.define("Compliment", {
    userSender: DataTypes.INTEGER,
    userReceiver: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
    message: DataTypes.TEXT,
  });

  Compliment.associate = (models) => {
    Compliment.belongsTo(models.User, {
      as: "sender",
      foreignKey: "userSender",
    });
    Compliment.belongsTo(models.User, {
      as: "receiver",
      foreignKey: "userReceiver",
    });
    Compliment.belongsTo(models.Tag, { as: "tag", foreignKey: "tagId" });
  };

  return Compliment;
};

module.exports = complimentModel;
