const { AuthenticationError } = require('apollo-server-express');
const { User, City } = require('../models');
const { signToken, authenticate } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
              .select('-__v -password')
              .populate('savedCities');
  
            return userData;
        }
  
        throw new AuthenticationError('Not logged in');
      },
    },
  
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        console.log('user created', token, user)
        return { token, user };
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
      },
      // add token decrypt it take out user _id
      addCity: async (parent, { input }, context) => {
        // const user = await authenticate(token);
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedCities: input } },
            { new: true }
          ).populate('savedCities');
          return updatedUser;
        }
        throw new AuthenticationError('You must be logged in to save a city')
      },
      removeCity: async (parent, { cityName }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedCities: { cityName } } },
            { new: true }
          );
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in')
      }
    }
};

module.exports = resolvers;