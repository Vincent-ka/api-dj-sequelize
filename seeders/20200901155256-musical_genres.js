const now = new Date();

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Musicalgenres', [
      { id: 1, name: "Open Format", createdAt: now, updatedAt: now},
      { id: 2, name: "House", createdAt: now, updatedAt: now },
      { id: 3, name: "Deep House", createdAt: now, updatedAt: now },
      { id: 4, name: "Electro", createdAt: now, updatedAt: now },
      { id: 5, name: "Funk", createdAt: now, updatedAt: now },
      { id: 6, name: "Hip Hop", createdAt: now, updatedAt: now },
      { id: 7, name: "Rap", createdAt: now, updatedAt: now }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Musicalgenres', null, {});
  }
};
