'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Schedule.init({
    // id: DataTypes.INTEGER, không cần khóa chính
    currentnumber: DataTypes.INTEGER,
    maxnumber: DataTypes.INTEGER,
    date: DataTypes.DATE,
    timetype: DataTypes.STRING,
    doctorid: DataTypes.INTEGER
    
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};