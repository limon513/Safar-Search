'use strict';
const {
  Model
} = require('sequelize');
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
    seatMap: {
      type: DataTypes.JSON,
      get(){
        return (
          JSON.parse(this.getDataValue('seatMap'))
        )
      },
      set(value){
        this.setDataValue('seatMap', JSON.stringify(value))
      }
    },
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};