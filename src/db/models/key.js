'use strict';
module.exports = (sequelize, DataTypes) => {
  const Key = sequelize.define('Key', {
    name: DataTypes.STRING,
    notes: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Key.associate = function(models) {
    // associations can be defined here
  };
  return Key;
};