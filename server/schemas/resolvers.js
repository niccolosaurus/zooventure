const { AuthenticationError } = require('apollo-server-express');
const { User, Animal, Plan } = require('../models')
const { signToken } = require('../utils/auth')


const resolvers = {
    Query: {
        animals: async () => {
            return await Animal.find();
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'plan.animals',
                    populate: 'name'
                });
            }
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addPlan: async (parent, { animals }, context) => {
            console.log(context);
            if (context.user) {
              const plan = new Plan({ animals });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { plan: plan } });
      
              return plan;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
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
