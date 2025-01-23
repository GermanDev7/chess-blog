const articleService = require('../services/articleService');
const Category= require('../models/Category')
const User= require('../models/User')

const articleResolver = {
    Query: {
        articles: async () => articleService.getAllArticles(),
        article: async (_, { id }) => articleService.getArticleById(id),
    },
    Mutation: {
        createArticle: async (_, { title, content, categoryId, authorId }) =>
            articleService.createArticle({ title, content, categoryId, authorId })
    },
    Article: {
        category: async (parent) => {
          const category = await Category.findById(parent.category);
          if (!category) {
            throw new Error('Categoría no encontrada');
          }
          return category;
        },
        author: async (parent) => {
          const author = await User.findById(parent.author);
          if (!author) {
            throw new Error('Autor no encontrado');
          }
          return author;
        },
      },
}
module.exports = articleResolver;