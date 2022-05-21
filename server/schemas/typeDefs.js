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
        admin: Boolean
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

    type Product {
        _id: ID
        name: String
        img: String
        price: Float
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    } 

    type Query {
        animals: [Animal]
        animal(_id: ID!): Animal
        user(_id: ID!): User
        users: [User]
        plans(username: String): [Plan]
        plan(_id: ID!): Plan
        products: [Product]
        order(_id: ID!): Order
    }

    type Mutation {
        addUser(username: String, email: String, password: String): Auth
        addPlan(animals: [ID]): Plan
        updateUser(username: String, email: String, password: String): User
        createAnimal(name: String!, coord: String, Lat: Float, Lon: Float, description: String, img: String, funFact: String ): Animal
        updateAnimal(_id: ID!, name: String, coord: String, Lat: Float, Lon: Float, description: String, img: String, funFact: String): Animal
        login(email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
    }
`;

module.exports = typeDefs
