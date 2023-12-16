'use strict';
const bcrypt = require('bcryptjs')
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {
    }
  }
  Users.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg:"this email is already registered"
      },
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Users',
  })

  Users.prototype.correctPw = async (reqpassword, dbpassword) => {
    return await bcrypt.compareSync(reqpassword, dbpassword)
  }

  return Users
}