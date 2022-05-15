const db = require('../config/connection');
const { Animal } = require('../models');

const animalData = require('./animals.json');

db.once('open', async () => {
  await Animal.deleteMany({});

  const animals = await Animal.insertMany(animalData);

  console.log('Animal database seeded!');
  process.exit(0);
});