const { ApolloServer, gql } = require('apollo-server');
const dotenv = require('dotenv').config()

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs')
const connectDB = require('./database');

connectDB();

const server = new ApolloServer({
    typeDefs, resolvers,
    context: ({ req }) => {
        return { token: req.headers.authorization }
    }
});
server.listen().then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`)
})
