'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trips', {
      id: {
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
          key:'id'
        }
      },
      coachNo: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Buses',
          key:'coachNo',
        }
      },
      from: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Cities',
          key:'id',
        }
      },
      to: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Cities',
          key:'id',
        }
      },
      departureDate:{
        type: Sequelize.DATEONLY,
        allowNull:false,
      },
      departureTime: {
        type: Sequelize.TIME,
        allowNull:false
      },
      boardingTerminal: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Terminals',
          key:'id',
        }
      },
      allotedSeats: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      route: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trips');
  }
};