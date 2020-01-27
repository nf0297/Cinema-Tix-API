'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    title: DataTypes.TEXT,
    image: DataTypes.TEXT,
    id_genre: DataTypes.INTEGER,
    id_rating: DataTypes.INTEGER,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    duration: DataTypes.INTEGER
  }, {});
  movie.associate = function(models) {
    // associations can be defined here
    movie.belongsTo(models.genre, {
      as:"Genre",
      foreignKey:"id_genre"
    })
    movie.belongsTo(models.rating, {
      as:"AgeRating",
      foreignKey:"id_rating"
    })
    movie.hasMany(models.ticket, {
      as:"Ticket",
      foreignKey:"id_movie"
    })
  };
  return movie;
};