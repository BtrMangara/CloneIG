'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Posts)
    }
  }
  Users.init({
    username: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg : 'Username harus diisi'
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{msg:'Email Harus Diisi'},
        isEmail:{msg:'Email tidak valid'}
      }
    },
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate:function (user,options){
        user.image = user.image || "https://via.placeholder.com/150x150";
      }
    },
    sequelize,
    modelName: 'Users',
  });
  return Users;
};