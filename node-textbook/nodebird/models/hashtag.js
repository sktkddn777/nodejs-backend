'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hashtag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Post, { through: 'PostHashtag' });
    }
  }
  Hashtag.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    underscored: false,
    modelName: 'Hashtag',
    tableName: 'hashtags',
    paranoid: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  return Hashtag;
};