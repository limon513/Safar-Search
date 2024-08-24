'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agency.init({
    agencyName: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    agencyEmail: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail:true,
      },
    },
    agencyTradeNo: {
      type:DataTypes.STRING,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Agency',
  });
  return Agency;
};