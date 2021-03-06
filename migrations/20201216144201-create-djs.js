'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Djs', {
      id: {
        allowNull: false,
        primaryKey: true,
        default: Sequelize.fn('uuid_generate_v4'), 
        type: Sequelize.UUID
      },
      url_name: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      biography: {
        type: Sequelize.STRING
      },
      soundcloud: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      spotify: {
        type: Sequelize.STRING
      },
      beatport: {
        type: Sequelize.STRING
      },
      mixcloud: {
        type: Sequelize.STRING
      },
      youtube: {
        type: Sequelize.STRING
      },
      club_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Clubs',
          id: 'key'
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
    await queryInterface.dropTable('Djs');
  }
};