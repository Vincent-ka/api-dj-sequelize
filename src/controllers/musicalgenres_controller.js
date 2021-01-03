const { Musicalgenres } = require("../../models");

const musicalGenresController = {
  getAllMusicalGenres: async () => {
    const musicalGenresFound = await Musicalgenres.findAll();
    console.log(musicalGenresFound)
    return musicalGenresFound;
  },
  addMusicalGenres: async (data) => {
    const musicalGenreCreated = await Musicalgenres.create(data);
    return musicalGenreCreated
  },
};

module.exports = musicalGenresController;
