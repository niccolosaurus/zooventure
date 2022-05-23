const { AuthenticationError } = require('apollo-server-express');
const { User, Animal, Plan } = require('../models')
const { signToken } = require('../utils/auth')


const resolvers = {
  Query: {
    animals: async () => {
      return await Animal.find();
    },
    animal: async (parent, { _id }) => {
      return await Animal.findById(_id);
    },
    user: async (parent, args, context) => {
      // console.log(context, "more context")

      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'plans.animals',
          populate: 'name'
        });
        return user
      } throw new AuthenticationError("err")


    },
    users: async () => {
      return await User.find().populate({
        path: 'plans.animals',
        populate: 'name'
      });

    },
    plans: async () => {
      return await Plan.find().populate('animal');
    },
    plan: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'plans.animals',
          populate: 'name'
        });

        return user.plans.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    // plan: async (parent, { _id }) => {
    //   return await Plan.findPlan(_id).populate();
    // },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addPlan: async (parent, args, context) => {
      // console.log(context, 'verify context');
      // console.log('animals', args.animals)
      if (context.user) {
        const plan = args.animals

        const user = await User.findById(context.user._id).populate({
          path: 'plans.animals',
          populate: 'name'
        });

        user.plans[0].animals.map(animal => {
          // return animal._id.toString() !== plan
          if (animal._id.toString() === plan[0]) {
            throw new Error('Animal already added to plan');
          }
        })

        return await User.findByIdAndUpdate(context.user._id, { $push: { 'plans.0.animals': plan } });

        // return plan;
      }

      throw new AuthenticationError('Not logged in');
    },
    removePlan: async (parent, args, context) => {
      // console.log(context, 'verify context');
      console.log('animals', args.animals)
      if (context.user) {
        const plan = args.animals[0]

        const user = await User.findById(context.user._id).populate({
          path: 'plans.animals',
          populate: 'name'
        });

        // console.log(user.plans[0].animals[0]._id)
        // console.log(user.plans[0].animals[0]._id === 'new ObjectId("6289d5b30a1d2a6d604be214")')
        // console.log(typeof user.plans[0].animals[0]._id)
        // console.log(user.plans[0].animals[0]._id.toString())
        
        // let stringifiedId = user.plans[0].animals[0]._id.toString()
        // console.log(stringifiedId === '6289d5b30a1d2a6d604be214')
        
        console.log(plan)

        let newPlanAnimalArr = user.plans[0].animals.filter(animal => {
          return animal._id.toString() !== plan
        })

        console.log(newPlanAnimalArr)


        // return await User.findByIdAndUpdate(context.user._id, { $pull: { 'plans.0.animals': plan } }, { new: true });

        // return await User.find(context.user._id, { $pull: { 'plans.0.animals': {_id: plan} } }, { new: true });

        // return await User.findByIdAndUpdate(context.user._id, { $pull: { 'plans.0.animals.0._id': plan } }, { new: true });

        // return await User.findByIdAndUpdate(context.user._id, { $pull: { 'plans.0.animals': { $in: [ plan ] }} });

        // Plan B
        return await User.findByIdAndUpdate(context.user._id, { $set: { 'plans.0.animals': newPlanAnimalArr }});

        // return await User.findByIdAndUpdate(context.user._id, { $pull: { 'plans.0.animals': [ plan ] } }, { new: true });




        
        // return plan;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateAnimal: async (parent, { _id, name, coord, Lat, Lon, description, img, funFact }, context) => {

      return await Animal.findByIdAndUpdate(_id, { $set: { name, coord, Lat, Lon, description, img, funFact } }, { new: true });

    },
    createAnimal: async (parent, { name, coord, Lat, Lon, description, img, funFact }) => {
      // Create and return the new Animal object
      return await Animal.create({ name, coord, Lat, Lon, description, img, funFact });
    },

    addOrder: async (parent, { products }, context) => {
      // console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
