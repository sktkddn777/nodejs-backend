'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Domain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
    }
  }
  Domain.init({
    host: {
      type:DataTypes.STRING(80),
      allowNull:false,
    },
    type: {
      type: DataTypes.ENUM('free', 'premium'),
      allowNull: false,
    },
    clientSecret: {
      type:DataTypes.UUID,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Domain',
    tableName: 'domains',
  });
  return Domain;
};