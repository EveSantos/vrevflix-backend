const express = require("express");
const Anime = require("../models/Anime");

function findAll(req, res) {
    Anime.findAll().then((result) => {
        res.json(result);
    });
}

function findAnime(req, res) {
    Anime.findByPk(req.params.id).then((result) => {
        res.json(result);
    })
}

function addAnime(req, res) {
    var title = req.body.title;
    var season = req.body.season;
    var episodes = req.body.episodes;
    var category = req.body.category;
    var synopsis = req.body.synopsis;
    var source = req.body.source;
    var studio = req.body.studio;
    var licensor = req.body.licensor;
    Anime.create({
        title: title,
        season: season,
        episodes: episodes,
        category: category,
        synopsis: synopsis,
        source: source,
        studio: studio,
        licensor: licensor
    }).then((result) => {
        res.json(result);
    });
}

async function updateAnime(req, res) {
    var title = req.body.title;
    var season = req.body.season;
    var episodes = req.body.episodes;
    var category = req.body.category;
    var synopsis = req.body.synopsis;
    var source = req.body.source;
    var studio = req.body.studio;
    var licensor = req.body.licensor;
    await Anime.update({
        title: title,
        season: season,
        episodes: episodes,
        category: category,
        synopsis: synopsis,
        source: source,
        studio: studio,
        licensor: licensor
    },
        {
            where: {
                id: req.params.id
            }
        });
    Anime.findByPk(req.params.id).then((result) => {
        res.json(result);
    })
}

async function deleteAnime(req, res) {
    await Anime.destroy({
        where: {
            id: req.params.id,
        },
    });
    Anime.findAll().then((result) => res.json(result));
}

module.exports = {findAll, findAnime, addAnime, updateAnime, deleteAnime};