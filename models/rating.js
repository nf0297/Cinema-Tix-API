'use strict';
module.exports = (sequelize, DataTypes) => {
  const rating = sequelize.define('rating', {
    initial: DataTypes.TEXT,
    meaning: DataTypes.TEXT
  }, {});
  rating.associate = function(models) {
    // associations can be defined here
    rating.hasMany(models.movie, {
      as:"Movies",
      foreignKey:"id_rating"
    })
  };
  return rating;
};