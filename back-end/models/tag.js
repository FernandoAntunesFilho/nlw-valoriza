const tagModel = (sequelize, DataTypes) => {
  const Tag = sequelize.define("Tag", {
    name: DataTypes.STRING,
  });

  return Tag;
};

module.exports = tagModel;
