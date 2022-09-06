const Sequelize = require("sequelize");
const connection = require("../../../database");
const Movie = require("./Movie");

const Actor = connection.define('actors', {
    name: {
        type: Sequelize.STRING
    },
    birth: {
        type: Sequelize.STRING
    },
});

// Actor.sync({ force: true });
module.exports = Actor;