const express = require("express");

const { OK } = require("../helpers/status_codes");

const {
  getAllMusicalGenres,
  addMusicalGenres
} = require("../controllers/musicalgenres_controller");

const router = express.Router();

router.get("/", async (request, response) => {
  const musicalGenres = await getAllMusicalGenres();
  response.status(OK).json(musicalGenres);
});
router.post("/", async (request, response) => {
  const musicalGenreToAdd = request.body;

  const newMusicalGenre = await addMusicalGenres(musicalGenreToAdd);
  response.status(CREATED).json(newMusicalGenre);
});

module.exports = router;
