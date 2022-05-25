const { AuthenticationError, ApolloError } = require("apollo-server-express");
const { User, Animal, Plan } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    animals: async () => {
      return await Animal.find();
    },
    animal: async (parent, { _id }) => {
      return await Animal.findById(_id);
    },
    user: async (parent, args, context) => {

      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "plans.animals",
          populate: "name",
        });
        return user;
      }
      throw new AuthenticationError("err");
    },
    users: async () => {
      return await User.find().populate({
        path: "plans.animals",
        populate: "name",
      });
    },
    plans: async () => {
      return await Plan.find().populate("animal");
    },
    plan: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "plans.animals",
          populate: "name",
        });

        return user.plans.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addPlan: async (parent, args, context) => {

      if (context.user) {
        const plan = args.animals;

        const user = await User.findById(context.user._id).populate({
          path: "plans.animals",
          populate: "name",
        });

        user.plans[0].animals.map((animal) => {
          if (animal._id.toString() === plan[0]) {
            throw new Error("Animal already added to plan");
          }
        });

        return await User.findByIdAndUpdate(context.user._id, {
          $push: { "plans.0.animals": plan },
        });

      }

      throw new AuthenticationError("Not logged in");
    },
    removePlan: async (parent, args, context) => {
      if (context.user) {
        const plan = args.animals[0];

        const user = await User.findById(context.user._id).populate({
          path: "plans.animals",
          populate: "name",
        });

        let newPlanAnimalArr = user.plans[0].animals.filter((animal) => {
          return animal._id.toString() !== plan;
        });

        return await User.findByIdAndUpdate(context.user._id, {
          $set: { "plans.0.animals": newPlanAnimalArr },
        });

      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateAnimal: async (
      parent,
      { _id, name, coord, Lat, Lon, description, img, funFact },
      context
    ) => {
      return await Animal.findByIdAndUpdate(
        _id,
        { $set: { name, coord, Lat, Lon, description, img, funFact } },
        { new: true }
      );
    },
    createAnimal: async (
      parent,
      { name, coord, Lat, Lon, description, img, funFact }
    ) => {
      return await Animal.create({
        name,
        coord,
        Lat,
        Lon,
        description,
        img,
        funFact,
      });
    },
    deleteAnimal: async (parent, args) => {
      const animalToDelete = args.animals;

      await Animal.deleteOne( {_id: animalToDelete } );

    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;