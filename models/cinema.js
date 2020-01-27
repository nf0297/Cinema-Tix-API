'use strict';
module.exports = (sequelize, DataTypes) => {
  const cinema = sequelize.define('cinema', {
    name: DataTypes.TEXT,
    location: DataTypes.TEXT,
    urllocation: DataTypes.TEXT
  }, {});
  cinema.associate = function(models) {
    // associations can be defined here
    cinema.hasMany(models.hall, {
      as:"Halls",
      foreignKey:"id_cinema"
    })
  };
  return cinema;
};