const express = require("express");
const routes = express.Router();

routes.get("/", (req,res) => {
    return res.json({name: "Teste"});
});

module.exports = routes;