const complimentModel = (sequelize, DataTypes) => {
  const Compliment = sequelize.define("Compliment", {
    userSender: DataTypes.INTEGER,
    userReceiver: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
    message: DataTypes.TEXT,
  });

  Compliment.belongsTo = (models) => {
    Compliment.hasMany(models.User, {
      as: "sentBy",
      foreignKey: "userSender",
    });
    Compliment.hasMany(models.User, {
      as: "receivedBy",
      foreignKey: "userReceiver",
    });
    Compliment.hasMany(models.Tag, {
      as: "tag",
      foreignKey: "tagId",
    });
  };

  return Compliment;
};

module.exports = complimentModel;
