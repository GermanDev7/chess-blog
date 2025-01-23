const { ApolloServer, gql } = require('apollo-server');
const dotenv = require('dotenv').config()

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs')
const connectDB = require('./database');

connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token=  req.headers.authorization|| '' ;
        if(token){
            try {
                const decoded=JsonWebTokenError.verify(token,'SECRET_KEY');
                return {userId:decoded.userId}
                
            } catch (error) {
                console.error('Token inválido',error);
                
            }
        }
        return {}
    }
});
server.listen().then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`)
})
