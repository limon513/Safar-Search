'use strict';
const {
  Model
} = require('sequelize');
const { Enums } = require('../utils/common');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Bus,{
        foreignKey:'coachNo',
        targetKey:'coachNo',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      });
    }
  }
  Seat.init({
    coachNo: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    seatNo: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    seatStatus: {
      type: DataTypes.ENUM(Enums.SeatStat.AVAILABLE,Enums.SeatStat.BOOKED),
      defaultValue: Enums.SeatStat.AVAILABLE,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};