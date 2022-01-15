const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
    type User {
        _id: ID
        username: String
        email: String
        savedCities: [City]
    }

    type City {
        cityName: String!
        cityId: ID
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        me: User
    }

    input cityInput {
        cityName: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addCity(input: cityInput): User
        removeCity(cityName: String): User
    }

`;

module.exports = typeDefs;