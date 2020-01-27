'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genres', [
      {
        name: "Action",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Drama",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Romance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thriller",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Comedy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Animation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Adventure",
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
