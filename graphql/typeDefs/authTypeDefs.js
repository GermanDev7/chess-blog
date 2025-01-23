const { gql } = require('apollo-server');

const authTypeDefs = gql`
    type AuthPayload{
        token:String!
        user:User!
    }

     type Mutation{
        register(
            username:String!,
            email:String!,
            password:String!
        ):AuthPayload
        logins(
            email:String!,
            password:String
        ):AuthPayload
     }
`;

module.exports = authTypeDefs