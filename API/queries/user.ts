import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query GetUserById($getUserByIdId: String!) {
    getUserByID(id: $getUserByIdId) {
      id
      email
      password
      firstName
      lastName
      createdAt
      role
      updatedAt
    }
  }
`;
