const articleService = require('../services/articleService');

const articleResolver = {
    Query: {
        articles: async () => articleService.getAllArticles(),
        article: async (_, { id }) => articleService.getArticleById(id),
    },
    Mutation: {
        createArticle: async (_, { title, content, categoryId, authorId }) =>
            articleService.createArticle({ title, content, categoryId, author:authorId })
    }
}
module.exports = articleResolver;