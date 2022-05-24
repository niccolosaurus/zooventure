import { gql } from '@apollo/client';

// Query to retrieve all animals.
export const QUERY_ANIMALS = gql`
  query getAnimals {
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
`;

// Query to retrieve all users.
export const QUERY_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
      admin
      plans {
        _id
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
  }
`;

// Query to retrieve a single user.
export const QUERY_USER = gql`
   {
    user {
      _id
      username
      email
      admin
      plans {
        _id
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
  }
`;
