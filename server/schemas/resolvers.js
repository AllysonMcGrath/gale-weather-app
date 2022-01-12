const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken, authenticate } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        const user = await authenticate(context.authorization);
        if (user) {
          try {
  
  
            const userData = await User.findOne({ _id: user.data._id })
              .select('-__v -password')
  
            return userData;
  
          } catch (err) {
          }
        }
  
        throw new AuthenticationError('Not logged in');
      },
    },
  
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
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
      }
    }
};

module.exports = resolvers;