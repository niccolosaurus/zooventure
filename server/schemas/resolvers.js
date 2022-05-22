const { AuthenticationError } = require('apollo-server-express');
const { User, Animal, Plan, Product, Order } = require('../models')
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
      console.log(context, "more context")

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
    products: async () => {
      return await Product.find();
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
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
      console.log(context, 'verify context');
      console.log('animals', args.animals)
      if (context.user) {
        const plan = args.animals

        return await User.findByIdAndUpdate(context.user._id, { $push: { 'plans.0.animals': plan } });

        // return plan;
      }

      throw new AuthenticationError('Not logged in');
    },
    removePlan: async (parent, args, context) => {
      console.log(context, 'verify context');
      console.log('animals', args.animals)
      if (context.user) {
        const plan = args.animals

        return await User.findByIdAndUpdate(context.user._id, { $pull: { 'plans.0.animals': plan } });

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
