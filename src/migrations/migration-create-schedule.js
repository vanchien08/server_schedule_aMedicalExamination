'use strict'; // tự động map vào databases
module.exports = {
  // currentnumber: DataTypes.INTEGER,
  // maxnumber: DataTypes.INTEGER,
  // date: DataTypes.DATE,
  // timetype: DataTypes.STRING,
  // doctorid: DataTypes.INTEGER
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('schedule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      currentnumber: {
        type: Sequelize.INTEGER
      },
      maxnumber: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      timetype: {
        type: Sequelize.STRING
      },
      doctorid: {
        type: Sequelize.INTEGER
      },
    
     
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('schedule');
  }
};