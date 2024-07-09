'use strict'; // tự động map vào databases
module.exports = {
    // statusid: DataTypes.STRING,
    // doctorid: DataTypes.INTEGER,
    // patientid: DataTypes.INTEGER,
    // date: DataTypes.DATE,
    // timetype: DataTypes.STRING,
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('booking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusid: {
        type: Sequelize.STRING
      },
      doctorid: {
        type: Sequelize.INTEGER
      },
      patientid: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      timetype: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('booking');
  }
};