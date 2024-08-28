'use strict';
const {
  Model
} = require('sequelize');
const {Enums} = require('../utils/common');
module.exports = (sequelize, DataTypes) => {
  class Bus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.Seat,{
        foreignKey:'coachNo',
        sourceKey:'coachNo',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      });

      this.hasMany(models.Trip,{
        foreignKey:'coachNo',
        sourceKey:'coachNo',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      });
    }
  }
  Bus.init({
    coachNo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    agencyId: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    agencyName: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    agencyEmail: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail:true,
      }
    },
    agencyPhone: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    row: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    column: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    busType: {
      type: DataTypes.ENUM(Enums.BusType.AC,Enums.BusType.NON_AC),
      defaultValue:Enums.BusType.NON_AC,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Bus',
  });
  return Bus;
};