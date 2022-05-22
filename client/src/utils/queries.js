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

export const QUERY_PRODUCTS = gql`
{
  products {
    _id
    name
    description
    price
    quantity
    category {
      name
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
