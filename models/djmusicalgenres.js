'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DjMusicalgenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.DjMusicalgenres.belongsTo(models.Djs, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  DjMusicalgenres.init({
    dj_id: DataTypes.INTEGER,
    musicalgenre: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DjMusicalgenres',
  });
  return DjMusicalgenres;
};