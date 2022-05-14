const { Schema, model } = require('mongoose');

const userSchema = new Schema({

});

const User = model('Animal', userSchema);

model.exports = User;