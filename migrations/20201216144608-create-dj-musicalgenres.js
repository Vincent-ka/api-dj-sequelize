'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DjMusicalgenres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dj_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Djs',
          key: 'id'
        }
      },
      musicalgenre: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Musicalgenres',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DjMusicalgenres');
  }
};