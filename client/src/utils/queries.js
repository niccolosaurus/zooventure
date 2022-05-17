import { gql } from '@apollo/client';

export const QUERY_ANIMALS = gql`
  query getAnimals {
    animals {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
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

// export const QUERY_USER = gql`
//   query user($username: String) {
//     user(username: $username) {
//       _id
//       username
//       firstName
//       lastName
//       email
//       animals {
//         _id
//         name
//       }
//     }
//   }
// `;

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
