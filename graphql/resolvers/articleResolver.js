const articleService = require('../services/articleService');

const articleResolver = {
    Query: {
        articles: async () => articleService.getAllArticles(),
        article: async (_, { id }) => articleService.getArticleById(id),
    },
    Mutation: {
        createArticle: async (_, { title, content, categoryId, author }) =>
            articleService.createArticle({ title, content, categoryId, author })
    }
}
module.exports = articleResolver;