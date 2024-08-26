'use strict';
/** @type {import('sequelize-cli').Migration} */
const {Enums} = require('../utils/common');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coachNo: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Buses',
          key:'coachNo',
        },
      },
      seatNo: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      seatStatus: {
        type: Sequelize.ENUM(Enums.SeatStat.AVAILABLE,Enums.SeatStat.BLOCKED,Enums.SeatStat.BOOKED),
        allowNull:false,
        defaultValue: Enums.SeatStat.AVAILABLE,
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
    await queryInterface.dropTable('Seats');
  }
};