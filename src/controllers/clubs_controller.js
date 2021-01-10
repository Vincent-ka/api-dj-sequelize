const { Clubs } = require("../../models");

const clubsController = {
  getAllClubs: async () => {
    const clubsFound = await Clubs.findAll();
    console.log(clubsFound)
    return clubsFound;
  },
  getClub: async (name) => {
    const oneClub = await Clubs.findOne({
      where: {
        name: name
      }
    })
    return {
      oneClub
    };
  },
  addClub: async (data) => {
    const clubCreated = await Clubs.create(data);
    return clubCreated
  },
};

module.exports = clubsController;
