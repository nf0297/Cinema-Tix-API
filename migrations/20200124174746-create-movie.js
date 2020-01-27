'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      id_genre: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genres',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      id_rating: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ratings',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      startdate: {
        type: Sequelize.DATE
      },
      enddate: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies');
  }
};