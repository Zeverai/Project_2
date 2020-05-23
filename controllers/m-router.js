const express = require(`express`);
const controller = express.Router()
const mongoose = require(`mongoose`);
const Character = require(`../models/characters.js`)



////////////////////////////
//         INDEX
////////////////////////////
controller.get('/', (req, res) => {
    Character.find({}, (error, data) => {
        res.render('Index', {
            data: data
        })
    });
     // res.send(`Hello, I'm the future index page!`)
});

////////////////////////////
//         NEW
////////////////////////////
controller.get('/new', (req, res) => {
    res.render('New');
});

////////////////////////////
//         CREATE
////////////////////////////
controller.post('/', (req, res) => {
    Character.create(req.body, (error, createdCharacter) => {
        res.redirect('/characters');
    });
});

////////////////////////////
//         SHOW
////////////////////////////
controller.get('/:id', (req, res) => {
    Character.findById(req.params.id, (error, data) => {
        res.render('Show', {
            data: data
        });
    });
});

////////////////////////////
//         EDIT
////////////////////////////
controller.get(`/edit/:id`, (req,res)=>{
    Character.findById(req.params.id, (error, data)=>{
        res.render(`Edit`, {data: data})
    })
})


////////////////////////////
//         UPDATE
////////////////////////////
controller.put(`/edit/:id`, (req,res)=>{
    Character.findByIdAndUpdate(req.params.id, req.body, (error, data)=>{
        res.redirect(`/characters`)
    })
})


////////////////////////////
//         UPDATE
////////////////////////////
controller.delete(`/:id`, (req, res)=>{
    Fruit.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect(`/characters`);
    });
});

////////////////////////////
//    EXPORT CONTROLLER
////////////////////////////
module.exports = controller