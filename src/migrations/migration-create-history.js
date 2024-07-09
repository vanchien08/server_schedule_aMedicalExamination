'use strict'; // tự động map vào databases
module.exports = {
    // patientid: DataTypes.INTEGER,
    // doctorid: DataTypes.INTEGER,
    // description: DataTypes.TEXT
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('history', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientid: {
        type: Sequelize.INTEGER
      },
      doctorid: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      files: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('history');
  }
};