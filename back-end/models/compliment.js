const complimentModel = (sequelize, DataTypes) => {
  const Compliment = sequelize.define("Compliment", {
    userSender: DataTypes.INTEGER,
    userReceiver: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
    message: DataTypes.TEXT,
  });

  Compliment.associate = (models) => {
    Compliment.belongsTo(models.User, { as: "sender", foreignKey: "userSender" });
    Compliment.belongsTo(models.Tag, { as: "tag", foreignKey: "tagId" });
  };
  // Compliment.associate = (models) => {
  //   Compliment.belongsTo(models.Tag, { as: "tag", foreignKey: "tagId" });
  // };
  // Aluno.associate = (models) => {
  //   Aluno.belongsTo(models.Turma, { as: "turma", foreignKey: "turmaId" });
  // };

  return Compliment;
};

module.exports = complimentModel;
