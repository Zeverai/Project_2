const express = require(`express`);
const controller = express.Router()
const mongoose = require(`mongoose`);
const Character = require(`../models/characters.js`)



////////////////////////////
//          INDEX
////////////////////////////
controller.get('/characters', (req, res) => {

    .find({}, (error, allFruits) => {
        res.render('Index', {
            fruits: allFruits,
            username: req.session.currentUser
        })
    });
});
