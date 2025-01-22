const { gql } = require('apollo-server');

const categoryTypedefs = gql`
    type Category{
        id:ID!
        name: String!
        articles:[Article]
    }

    type Query {
        categories:[Category]
        category(id: ID!): Category
    }
`;

module.exports = categoryTypedefs;