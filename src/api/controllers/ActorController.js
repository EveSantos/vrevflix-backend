const Actor = require("../models/Actor");

function findAll(req,res){
    Actor.findAll().then( result => {
        res.json(result);
    })
}

function findActor(req,res){
    Actor.findByPk(req.params.id).then((result) => {
        res.json(result);
    })
}

function addActor(req,res){
    var name = req.body.name;
    var birth = req.body.birth;

    Actor.create({
        name: name,
        birth: birth
    }).then(result => {
        res.json(result);
    })
}

async function updateActor(req,res){
    var name = req.body.name;
    var birth = req.body.birth;

    await Actor.update({
        name: name,
        birth: birth
    },
    {
        where: {
            id: req.params.id
        }
    });
    Actor.findByPk(req.params.id).then((result) => {
        res.json(result);
    });
}

async function deleteActor(req,res){
    await Actor.destroy({
        where:{
            id: req.params.id
        }
    });
    Actor.findAll().then((result) => res.json(result));
}

module.exports = { findAll, findActor, addActor, updateActor, deleteActor}