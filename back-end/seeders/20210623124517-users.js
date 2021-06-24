const { hash } = require('bcryptjs');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "Super User",
        email: "super.user@nlw.com",
        password: await hash("ferfilho1983", 8),
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Davi Antunes",
        email: "davi.antunes@nlw.com",
        password: await hash("123456", 8),
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
