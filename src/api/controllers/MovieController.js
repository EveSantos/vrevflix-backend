const Movie = require("../models/Movie");
const Actor = require("../models/Actor");

function findAll (req, res ) {
    Movie.findAll({
        include: [{ model: Actor }]
    }
    ).then( (result) => {
        res.json(result);
    });
}

function findMovie (req,res) {
    Movie.findByPk(req.param.id).then((result) => {
        res.json(result);
    })
}

function addMovie (req,res){
    var title = req.body.title;
    var release_date = req.body.release_date;
    var category = req.body.category;
    var synopsis = req.body.synopsis;
    var director = req.body.category;
    var actors = req.body.actors;
    var duration = req.body.duration;

    Movie.create({
        title: title,
        release_date: release_date,
        category: category,
        synopsis: synopsis,
        director: director,
        actors: actors,
        duration: duration,
    }).then((result) => {
        res.json(result);
    });
}

async function updateMovie (req, res) {
    var title = req.body.title;
    var release_date = req.body.release_date;
    var category = req.body.category;
    var synopsis = req.body.synopsis;
    var director = req.body.category;
    var actors = req.body.actors;
    var duration = req.body.duration;

    await Movie.update({
        title: title,
        release_date: release_date,
        category: category,
        synopsis: synopsis,
        director: director,
        actors: actors,
        duration: duration,
    },
    {
        where:{
            id: req.params.id
        }
    });
    Movie.findByPk(req.params.id).then((result) => {
        res.json(result);
    });
}

async function deleteMovie(req,res){
    await Movie.destroy({
        where: {
            id: req.params.id
        }
    });
    Movie.findAll().then((result) => res.json(result));
}


module.exports = { findAll, findMovie, addMovie, updateMovie, deleteMovie}