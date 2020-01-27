'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('seats', [
      {
        number: 1,
        booked: true,
        id_hall: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 2,
        booked: true,
        id_hall: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 3,
        booked: true,
        id_hall: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 4,
        booked: false,
        id_hall: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 5,
        booked: false,
        id_hall: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 1,
        booked: false,
        id_hall: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 2,
        booked: false,
        id_hall: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 3,
        booked: false,
        id_hall: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 4,
        booked: false,
        id_hall: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 5,
        booked: false,
        id_hall: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 1,
        booked: true,
        id_hall: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 2,
        booked: false,
        id_hall: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 3,
        booked: false,
        id_hall: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 4,
        booked: false,
        id_hall: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 5,
        booked: false,
        id_hall: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 1,
        booked: false,
        id_hall: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 2,
        booked: false,
        id_hall: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 3,
        booked: false,
        id_hall: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 4,
        booked: false,
        id_hall: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 5,
        booked: false,
        id_hall: 4,
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
