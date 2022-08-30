/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserById
// ====================================================

export interface GetUserById_getUserByID {
  __typename: "IUser";
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: any;
  role: string;
  updatedAt: any;
}

export interface GetUserById {
  getUserByID: GetUserById_getUserByID;
}

export interface GetUserByIdVariables {
  getUserByIdId: string;
}
