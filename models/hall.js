'use strict';
module.exports = (sequelize, DataTypes) => {
  const hall = sequelize.define('hall', {
    number: DataTypes.INTEGER,
    time: DataTypes.TIME,
    id_cinema: DataTypes.INTEGER
  }, {});
  hall.associate = function(models) {
    // associations can be defined here
    hall.belongsTo(models.cinema, {
      as:"onCinema",
      foreignKey:"id_cinema"
    })
    hall.hasMany(models.seat, {
      as:"Seat",
      foreignKey:"id_hall"
    })
  };
  return hall;
};