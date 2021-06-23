module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "Super User",
        email: "super.user@nlw.com",
        password: "ferfilho1983",
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Davi Antunes",
        email: "davi.antunes@nlw.com",
        password: "123456",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
