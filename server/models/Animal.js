const { Schema, model } = require('mongoose');

const animalSchema = new Schema({

});

const Animal = model('Animal', animalSchema);

model.exports = Animal;