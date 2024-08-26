'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Terminal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey: 'cityId',
        targetKey: 'id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      });
      this.hasMany(models.Trip,{
        foreignKey:'boardingTerminal',
        targetKey:'id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      });
    }
  }
  Terminal.init({
    terminalName: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    cityId:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Terminal',
  });
  return Terminal;
};