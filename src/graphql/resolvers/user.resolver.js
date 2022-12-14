import { gql } from "@apollo/client";

export const REGISTER_USUARIO = gql `
  mutation RegisterUsuario($username: String!, $email: String!, $password: String!) {
  registerUsuario(username: $username, email: $email, password: $password)
}
`;

export const LOGIN_USUARIO = gql `
  mutation LoginUsuario($email: String!, $password: String!) {
  loginUsuario(email: $email, password: $password) }
`;

export const SEND_REFRESHTOKEN = gql `
  mutation Mutation {
    sendRefreshToken
  } 
`;

export const LOGOUT = gql `
  mutation Mutation {
    logOut
  }
`;