'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    fullname: DataTypes.TEXT,
    email: DataTypes.TEXT,
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.ticket, {
      as:"Ticket",
      foreignKey:"id_user"
    })
  };
  return users;
};