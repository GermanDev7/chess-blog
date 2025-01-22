const userService = require('../services/userService');

const userResolvers = {
    Query: {
        users: async () => userService.getAllUsers(),
        user: async (_, { id }) => userService.getUserById(id)
    },
    Mutation: {
        createUser: async (_, { username, email, password }) =>
            userService.createUser({ username, email, password }),
    },
};

module.exports = userResolvers;