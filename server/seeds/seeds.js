const db = require('../config/connection');
const { Animal, User, Product } = require('../models')

const userData = require('./userData.json')
const animalData = require('./animalCoord.json');


db.once('open', async () => {
  
  await Animal.deleteMany({});
  const animals = await Animal.insertMany(animalData);
  
  console.log('Animal collection seeded!');


  await User.deleteMany({});
  // await User.insertMany(userData);

  await User.create((
    [
      {
          "username": "Luke",
          "email": "luke@gmail.com",
          "password": "password123",
          "admin": true,
          "plans": [
            {
              animals: [animals[0]._id, animals[5]._id, animals[10]._id]
            }
          ]
      },
      {
          "username": "Leia",
          "email": "leia@gmail.com",
          "password": "password123",
          "admin": true,
          "plans": [
            {
              animals: [animals[1]._id, animals[12]._id, animals[15]._id]
            }
          ]
      },
      {
          "username": "Han",
          "email": "han@gmail.com",
          "password": "password123",
          "admin": false,
          "plans": [
            {
              animals: [animals[9]._id, animals[30]._id, animals[37]._id]
            }
          ]
      }
  ]
  ))

  console.log('User collection seeded!');





  process.exit(1);



});
