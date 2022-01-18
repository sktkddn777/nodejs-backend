'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    content: {
      type:DataTypes.STRING(150),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  }, {
    sequelize,
    underscored: false,
    modelName: 'Post',
    tableName: 'posts',
    paranoid: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  return Post;
};