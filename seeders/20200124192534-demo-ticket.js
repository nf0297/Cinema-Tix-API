'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tickets', [
      {
        id_user: 1,
        id_movie: 11,
        price: 45000,
        date:'2020-01-25',
        id_seat: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_user: 2,
        id_movie: 11,
        price: 45000,
        date:'2020-01-25',
        id_seat: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_user: 3,
        id_movie: 11,
        price: 45000,
        date:'2020-01-25',
        id_seat: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_user: 4,
        id_movie: 11,
        price: 50000,
        date:'2020-01-25',
        id_seat: 11,
        createdAt: new Date(),
        updatedAt: new Date()
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
