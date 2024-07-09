'use strict'; // tự động map vào databases
module.exports = {
    // statusid: DataTypes.STRING,
    // doctorid: DataTypes.INTEGER,
    // patientid: DataTypes.INTEGER,
    // date: DataTypes.DATE,
    // timetype: DataTypes.STRING,
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clinic', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
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
    await queryInterface.dropTable('clinic');
  }
};