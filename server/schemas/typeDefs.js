const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Animal {
        _id: ID
        name: String
        coord: Float
        Lat: Float
        Lon: Float
        description: String
        img: String
        funFact: String
    }

    type User {
        _id: ID
        username: String
        firstName: String
        lastName: String
        email: String
        plan: Plan
    }

    type Plan {
        _id: ID
        animals: [Animal]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        animals: [Animal]
        user: User
        plan(_id: ID): Plan
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addPlan(animals: [ID]): Plan
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
    }

`;

module.exports = typeDefs
