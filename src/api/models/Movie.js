const Sequelize = require("sequelize");
const connection = require("../../../database");
const Actor = require("./Actor");

const Movie = connection.define('movies', {
    title: {
        type: Sequelize.STRING,
    },
    release_date: {
        type: Sequelize.STRING,
    },
    duration: {
        type: Sequelize.INTEGER,
    },
    director: {
        type: Sequelize.STRING,
    },
    synopsis: {
        type: Sequelize.TEXT, 
    },
    category: {
        type: Sequelize.TEXT, 
    }
});

Actor.hasMany(Movie);
Movie.belongsTo(Actor);

// Movie.sync({ force: true });
module.exports = Movie;