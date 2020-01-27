'use strict';
module.exports = (sequelize, DataTypes) => {
  const genre = sequelize.define('genre', {
    name: DataTypes.TEXT
  }, {});
  genre.associate = function(models) {
    // associations can be defined here
    genre.hasMany(models.movie, {
      as: "Movies",
      foreignKey: "id_genre"
    })
  };
  return genre;
};