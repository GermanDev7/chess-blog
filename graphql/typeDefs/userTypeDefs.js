const { gql } = require('apollo-server');

const userTypeDefs = gql`
type User {
    id:ID!
    username: String!
    email: String!    
}

type Query {
    users:[User]
    user(id:ID!):User
}

type Mutation {
    createUser(username: String!,email: String!,password: String!): User
}
`;

module.exports = userTypeDefs;
