'use strict';
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "commenter",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
        targetKey: 'id',
      });
    }
  }
  Comment.init({
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Comment',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  return Comment;
};