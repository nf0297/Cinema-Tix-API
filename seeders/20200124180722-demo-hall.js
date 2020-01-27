'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('halls', [
      {
        number: 1,
        time: "10:00",
        id_cinema: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 2,
        time: "15:00",
        id_cinema: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 1,
        time: "10:00",
        id_cinema: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 2,
        time: "15:00",
        id_cinema: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
