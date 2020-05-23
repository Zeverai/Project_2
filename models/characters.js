const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const characterSchema = new Schema({
    name: { type: String, required: true },
    bio: { type: String, required: true },
    img: {type: String, required: false}
}, { timestamps: true });

//  Create Model from our Schema
const Character = mongoose.model('Character', fruitSchema);

// Export Fruit Model
module.exports = Character;
