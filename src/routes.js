const express = require("express");
const animes = require("./api/controllers/AnimeController");
const routes = express.Router();

// routes.get("/", (req,res) => {
//     return res.json({name: "Teste"});
// });

routes.get("/animes", animes.findAll);
routes.post("/animes/new", animes.addAnime);
routes.get("/animes/:id", animes.findAnime);
routes.put("/animes/:id", animes.updateAnime);
routes.delete("/animes/:id", animes.deleteAnime);


module.exports = routes;