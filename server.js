const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const routes = require("./src/routes");
const connection = require("./database");

const animeController = require("./src/api/controllers/AnimeController");
const Anime = require("./src/api/models/Anime");

// app.use(express.static('public'));

app.use(express.json());
app.use(routes);
// app.use("/", animeController);

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error);
    });

// Body Parser
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
