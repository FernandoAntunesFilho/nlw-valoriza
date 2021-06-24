const complimentModel = (sequelize, DataTypes) => {
  const Compliment = sequelize.define("Compliment", {
    userSender: DataTypes.INTEGER,
    userReceiver: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
    message: DataTypes.TEXT,
  });

  Compliment.associate = (models) => {
    Compliment.hasMany(models.User, {
      as: "userSender",
      foreignKey: "userSender",
    });
    Compliment.hasMany(models.User, {
      as: "userReceiver",
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
