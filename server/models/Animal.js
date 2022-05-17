const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    coord: {
        type: String,
        required: false,
        trim: true,
    },
    Lat: {
        type: [Number],
        required: true,
    },
    Lon: {
        type: [Number],
        required: true
    },
    description: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    funFact: {
        type: String,
        required: false
    }


});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;