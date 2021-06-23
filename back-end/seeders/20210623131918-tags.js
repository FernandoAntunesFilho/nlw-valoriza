module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("Tags", [
      {
        id: 1,
        name: "Fenomenal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Talentoso",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Tags", null, {});
  },
};
