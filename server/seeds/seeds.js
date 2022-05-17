const db = require('../config/connection');
const { Animal, User } = require('../models')

const userData = require('./userData.json')
const animalData = require('./animalCoord.json');


db.once('open', async () => {
  
  await Animal.deleteMany({});
  const animals = await Animal.insertMany(animalData);
  
  await User.deleteMany({});
  await User.insertMany(userData);




  console.log('Animal database seeded!');
  process.exit(0);



});




// db.once('open', async () => {
//   try {
//     await Animal.deleteMany({});
//     await User.deleteMany({});

//     await User.create(userData);

//     for (let i = 0; i < animalData.length; i++) {
//       const { _id, name } = await Animal.create(animalData[i]);
//       const user = await User.findOneAndUpdate(
//         { plans: animalData },
//         {
//           $addToSet: {
//             plans: _id,
//           },
//         }
//       );
//     }
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   console.log('all done!');
//   process.exit(0);
// });






