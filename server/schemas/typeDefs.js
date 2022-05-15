const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Animal {
        _id: ID
        name: String
    }

    type User {
        _id: ID
        username: String
        firstName: String
        lastName: String
        email: String
        animals: [Animal]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        animals: [Animal]
        user: User
        animals(username: String )
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
    }

`;

module.exports = typeDefs
