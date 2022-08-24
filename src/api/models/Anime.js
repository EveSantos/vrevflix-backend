const Sequelize = require("sequelize");
const connection = require("../../../database");

const Anime = connection.define('animes', {
    title: {
        type: Sequelize.STRING,
    },
    season: {
        type: Sequelize.STRING,
    },
    episodes: {
        type: Sequelize.INTEGER,
    },
    category: {
        type: Sequelize.STRING,
    },
    synopsis: {
        type: Sequelize.TEXT, 
    },
    source: {
        type: Sequelize.STRING
    },
    studio: {
        type: Sequelize.STRING
    },
    licensor: {
        type: Sequelize.STRING
    },
});

module.exports = Anime;