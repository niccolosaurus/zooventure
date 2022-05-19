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


export const QUERY_USERS = gql`
  query getUsers {
    users {
      username
      email
      plans {
        _id
        animals {
          _id
          name
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  query getUser {
    user {
      username
      email
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

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       plan {
//         _id
//         name
//       }
//     }
//   }
// `;
