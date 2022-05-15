const { Schema, model } = require('mongoose');

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    coord: {
        type: Number,
        required: false,
        trim: true,
    },
    Lat: {
        type: Number,
        required: true,
        trim: true
    },
    Lon: {
        type: Number,
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

const Animal = model('Animal', animalSchema);

model.exports = Animal;