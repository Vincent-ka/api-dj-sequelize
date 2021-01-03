const { Clubs } = require("../../models");

const clubsController = {
  getAllClubs: async () => {
    const clubsFound = await Clubs.findAll();
    console.log(clubsFound)
    return clubsFound;
  },
  getClub: async (name) => {
    const clubFound = await Clubs.findOne(name);
    return {clubFound};
  },
  addClub: async (data) => {
    const clubCreated = await Clubs.create(data);
    return clubCreated
  },
};

module.exports = clubsController;
