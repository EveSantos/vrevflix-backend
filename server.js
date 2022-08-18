const express = require("express");
const routes = require("./src/routes");
const connection = require("./database")

const app = express();

app.use(express.json());
app.use(routes);

connection.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
