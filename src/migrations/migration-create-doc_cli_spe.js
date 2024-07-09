'use strict'; // tự động map vào databases
module.exports = {
    // doctorid: DataTypes.INTEGER,
    // clinicid: DataTypes.INTEGER,
    // specialtyid: DataTypes.INTEGER
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doc_cli_spe', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctorid: {
        type: Sequelize.INTEGER
      },
      clinicid: {
        type: Sequelize.INTEGER
      },
      specialtyid: {
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
    await queryInterface.dropTable('doc_cli_spe');
  }
};