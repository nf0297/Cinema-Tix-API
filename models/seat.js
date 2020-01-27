'use strict';
module.exports = (sequelize, DataTypes) => {
  const seat = sequelize.define('seat', {
    number: DataTypes.INTEGER,
    booked: DataTypes.BOOLEAN,
    id_hall: DataTypes.INTEGER
  }, {});
  seat.associate = function(models) {
    // associations can be defined here
    seat.belongsTo(models.hall, {
      as:"atHall",
      foreignKey:"id_hall"
    })
    seat.hasOne(models.ticket, {
      as:"Seat",
      foreignKey:"id_seat"
    })
  };
  return seat;
};