const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Animal {
        _id: ID
        name: String
        coord: String
        Lat: Float
        Lon: Float
        description: String
        img: String
        funFact: String
    }

    type User {
        _id: ID
        username: String
        email: String
        plans: [Plan]
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
        users: [User]
        plans: [Plan]
        plan(_id: ID): Plan
    }

    type Mutation {
        addUser(username: String, email: String, password: String): Auth
        addPlan(animals: [ID]): Plan
        updateUser(username: String, email: String, password: String): User
        login(email: String, password: String): Auth
    }

`;

module.exports = typeDefs
