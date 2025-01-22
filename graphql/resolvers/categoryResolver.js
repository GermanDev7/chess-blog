const categoryService = require('../services/categoryService');

const categoryResolvers = {
    Query: {
        categories: async () => categoryService.getAllcategories(),
        category: async (_, { id }) => categoryService.getCategoryById(id)
    }
}

module.exports = categoryResolvers;