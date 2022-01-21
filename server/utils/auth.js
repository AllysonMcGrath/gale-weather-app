const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');
require('dotenv').config();

// set token secret and expiration date
const secret = process.env.JW_SE;
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      // return res.status(400).json({ message: 'invalid token!' });
      console.log("Invalid token")
    }

    // send to next endpoint
    return req;
  },
  // authenticate: async function(auth){
  //   if (!auth) throw new AuthenticationError('you must be logged in');

  //   const token = auth.split('Bearer ')[1];
  //   console.ll
  //   if (!token) throw new AuthenticationError('you should provide a token');

  //   return await jwt.verify(token, secret, (err, decoded) => {
  //     if (err) throw new AuthenticationError('invalid token');
  //     return decoded;
  //   });
  // },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    var token = jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    return token
  },
};
