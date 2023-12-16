'use strict';
const bcrypt = require('bcrypt')
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
    hooks: {
      beforeCreate: async(user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10)
          user.password = bcrypt.hashSync(user.password, salt)
        }
      }
    },
    sequelize,
    modelName: 'Users',
  })

  Users.prototype.correctPw = async (reqpassword, dbpassword) => {
    return await bcrypt.compareSync(reqpassword, dbpassword)
  }

  return Users
}