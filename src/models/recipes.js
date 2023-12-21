'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {
    static associate(models) {

    }
  }
  Recipes.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    cuisine: {
      type: DataTypes.STRING,
      allowNull:false
    },
    ingridient: {
      type:DataTypes.STRING,
      allowNull:false
    },
    recipes: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Recipes',
  });
  return Recipes;
};