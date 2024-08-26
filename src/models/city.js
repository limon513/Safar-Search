'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Terminal,{
        foreignKey: 'cityId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.hasMany(models.Trip,{
        foreignKey:'from',
        sourceKey:'id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      });
      this.hasMany(models.Trip,{
        foreignKey:'to',
        sourceKey:'id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      });
    }
  }
  City.init({
    cityName: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    cityCode: {
      type:DataTypes.STRING,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};