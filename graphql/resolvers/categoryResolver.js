const categoryService = require('../services/categoryService');

const categoryResolvers = {
    Query: {
        categories: async () => categoryService.getAllCategories(),
        category: async (_, { id }) => categoryService.getCategoryById(id)
    },
    Mutation: {
        createCategory: async (_, args) => {
            return await categoryService.createCategory(args);
        }
    }
}

module.exports = categoryResolvers;