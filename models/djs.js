'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Djs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Djs.hasOne(models.DjMusicalgenres),
      models.Djs.belongsTo(models.Clubs, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  Djs.init({
    url_name: DataTypes.STRING,
    name: DataTypes.STRING,
    biography: DataTypes.STRING,
    soundcloud: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    spotify: DataTypes.STRING,
    beatport: DataTypes.STRING,
    mixcloud: DataTypes.STRING,
    youtube: DataTypes.STRING,
    club_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Djs',
  });
  return Djs;
};