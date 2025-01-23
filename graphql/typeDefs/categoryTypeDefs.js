const { gql } = require('apollo-server');

const categoryTypedefs = gql`
    type Category{
        id:ID!
        name: String!
        description:String!
        articles:[Article]
    }

    type Query {
        categories:[Category]
        category(id: ID!): Category
    }

    type Mutation {
        createCategory(
            name:String,
            description:String
        ):Category
    }
`;

module.exports = categoryTypedefs;