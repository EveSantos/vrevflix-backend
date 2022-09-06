const express = require("express");
const animes = require("./api/controllers/AnimeController");
const movies = require("./api/controllers/MovieController");
const actors = require("./api/controllers/ActorController");
const routes = express.Router();

// Rotas Animes
routes.get("/animes", animes.findAll);
routes.post("/animes/new", animes.addAnime);
routes.get("/animes/:id", animes.findAnime);
routes.put("/animes/:id", animes.updateAnime);
routes.delete("/animes/:id", animes.deleteAnime);

// Rotas Filnes
routes.get("/movies", movies.findAll);
routes.post("/movies/new", movies.addMovie);
routes.get("/movies/:id", movies.findMovie);
routes.put("/movies/:id", movies.updateMovie);
routes.delete("/movies/:id", movies.deleteMovie);

// Rotas Atores/Dubladores
routes.get("/actors", actors.findAll);
routes.post("/actors/new", actors.addActor);
routes.get("/actors/:id", actors.findActor);
routes.put("/actors/:id", actors.updateActor);
routes.delete("/actors/:id", actors.deleteActor);

module.exports = routes;