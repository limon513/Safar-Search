'use strict';
/** @type {import('sequelize-cli').Migration} */
const {Enums} = require('../utils/common');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Buses', {
      coachNo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agencyId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Agencies',
          key:'id',
        }
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      column: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      busType: {
        type: Sequelize.ENUM(Enums.BusType.AC,Enums.BusType.NON_AC),
        defaultValue:Enums.BusType.NON_AC,
        allowNull:false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Buses');
  }
};