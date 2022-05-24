'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init({
    tanggal_main: DataTypes.STRING,
    hasil: DataTypes.STRING,
    approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};