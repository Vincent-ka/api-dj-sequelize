'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clubs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Clubs.hasMany(models.Djs, {
        foreignKey: {
          name: 'club_id'
        }
      })
    }
  };
  Clubs.init({
    id: {
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Clubs'
  });
  return Clubs;
};