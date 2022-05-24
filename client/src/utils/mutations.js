import { gql } from '@apollo/client';

// Mutation to log in a user.
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// Mutation to add an animal to a user's "plan" (list of animals to see).
export const ADD_PLAN = gql`
  mutation addPlan($animals: [ID] ){
    addPlan(animals: $animals) {
      animals {
        _id
        name
        coord
        Lat
        Lon
        description
        img
        funFact
      }
    }
  }
`;

// Mutation to remove an animal from a user's "plan" (list of animals to see).
export const REMOVE_PLAN = gql`
  mutation removePlan($animals: [ID] ){
    removePlan(animals: $animals) {
      animals {
        _id
        name
        coord
        Lat
        Lon
        description
        img
        funFact
      }
    }
  }
`;

// Mutation to create a new user (sign-up).
export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// Mutation to create a new animal.
export const CREATE_ANIMAL = gql`
  mutation createAnimal(
    $name: String!,
    $coord: String,
    $Lat: Float,
    $Lon: Float,
    $description: String,
    $img: String,
    $funFact: String 
  ) {
    createAnimal(
      name: $name
      coord: $coord
      Lat: $Lat
      Lon: $Lon
      description: $description
      img: $img
      funFact: $funFact
    ) {
      name
    }
  }
`;

// Mutation to delete an animal completely.
export const DELETE_ANIMAL = gql`
  mutation deleteAnimal($animals: [ID] ){
    deleteAnimal(animals: $animals) {
        _id
    }
  }
`;