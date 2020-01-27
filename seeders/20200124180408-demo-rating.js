'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ratings', [
      {
        initial: "G",
        meaning: "General Audience",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        initial: "PG",
        meaning: "Parental Guidance Suggested",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        initial: "PG-13",
        meaning: "Parents Strongly Cautioned",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        initial: "R",
        meaning: "Restricted",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        initial: "NC-17",
        meaning: "Adults Only",
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
