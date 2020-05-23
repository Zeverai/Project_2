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
//    EXPORT CONTROLLER
////////////////////////////
module.exports = controller