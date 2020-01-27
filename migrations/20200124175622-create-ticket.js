'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      id_movie: {
        type: Sequelize.INTEGER,
        references: {
          model: 'movies',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      price: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      id_seat: {
        type: Sequelize.INTEGER,
        references: {
          model: 'seats',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    return queryInterface.dropTable('tickets');
  }
};