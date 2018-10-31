'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    name: DataTypes.STRING,
    frequency: DataTypes.FLOAT
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
  };
  return Note;
};