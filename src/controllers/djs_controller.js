const { pick } = require("lodash");

const { Djs, Musicalgenres, DjMusicalgenres } = require("../../models");
const { NotFoundError } = require("../helpers/errors");

const djsController = {
  getAllDjs: async () => {
    const djsFound = await Djs.findAll();
    console.log(djsFound)
    return djsFound;
  },

  getDj: async (name) => {
    const djFound = await Djs.findOne(name);
    return {djFound};
  },

  addDj: async (data) => {
    const djCreated = await Djs.create(data);
    return djCreated
  },

  updateDj: async (name, data) => {
    const djUpdated = await Djs.save(name);
    return {djUpdated}
  },

  deleteDj: async (name) => {
    const djDeleted = await Djs.destroy(name);
    return {djDeleted}
  },
};

module.exports = djsController;
