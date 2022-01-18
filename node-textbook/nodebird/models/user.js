'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Post);
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: true,
    },
    nick: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    provider: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'local',
    },
    snsId: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
  }, {
    sequelize,
    underscored: false,
    modelName: 'User',
    tableName: 'users',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return User;
};