const { gql } = require('apollo-server');

const articleTypedefs = gql`
    type Article {
        id: ID!
        title: String!
        content: String!
        category: Category!
        author: String!
        createdAt: String!
    }
    
    type Query {
        articles:[Article]
        article(id: ID!):Article
    }
    
    type Mutation {
        createArticle(
        title: String!,
        content: String!,
        categoryId: ID!,
        author: String!
        ):Article
    }

`

module.exports = articleTypedefs;