'use strict';
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define('ticket', {
    id_user: DataTypes.INTEGER,
    id_movie: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    date: DataTypes.DATE,
    id_seat: DataTypes.INTEGER
  }, {});
  ticket.associate = function(models) {
    // associations can be defined here
    ticket.belongsTo(models.users, {
      as:"Buyer",
      foreignKey:"id_user"
    })
    ticket.belongsTo(models.movie, {
      as:"Movie",
      foreignKey:"id_movie"
    })
    ticket.belongsTo(models.seat, {
      as:"atSeat",
      foreignKey:"id_seat"
    })
  };
  return ticket;
};