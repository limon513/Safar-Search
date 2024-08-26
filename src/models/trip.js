'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Agency,{
        foreignKey:'agencyId',
        targetKey: 'id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      });
      this.belongsTo(models.Bus,{
        foreignKey:'coachNo',
        targetKey:'coachNo',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      });
      this.belongsTo(models.City,{
        foreignKey:'from',
        targetKey:'id',
        as:'departureCity',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      });
      this.belongsTo(models.City,{
        foreignKey:'to',
        targetKey:'id',
        as:'arrivalCity',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      });
      this.belongsTo(models.Terminal,{
        foreignKey:'boardingTerminal',
        targetKey:'id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      });
    }
  }
  Trip.init({
    agencyId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    coachNo: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    from: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    to: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    departureDate:{
      type: DataTypes.DATEONLY,
      allowNull:false,
    },
    departureTime: {
      type:DataTypes.TIME,
      allowNull:false,
    },
    boardingTerminal: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    allotedSeats: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    route: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};