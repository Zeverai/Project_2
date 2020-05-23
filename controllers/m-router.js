const express = require(`express`);
const controller = express.Router()
const mongoose = require(`mongoose`);
const Character = require(`../models/characters.js`)



////////////////////////////
//         INDEX
////////////////////////////
controller.get('/', (req, res) => {
    // Character.find({}, (error, data) => {
    //     res.render('Index', {
    //         data: data
    //     })
    res.send(`Hello, I'm the future index page!`)
    // });
});












////////////////////////////
//    EXPORT CONTROLLER
////////////////////////////
module.exports = controller