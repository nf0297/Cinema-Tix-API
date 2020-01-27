'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cinemas', [
      {
        name: "Plaza Indonesia XXI",
        location: "Jakarta Pusat",
        urllocation: "Kosong",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cinépolis",
        location: "Jakarta Timur",
        urllocation: "Kosong",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
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
