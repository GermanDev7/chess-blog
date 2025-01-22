const Article = require('../models/Article');

const getAllArticles = async () => {
    return Article.find()
};

const getArticleById = async (id) => {
    return Article.findById(id);
}

const createArticle = async ({ title, content, categoryId, author }) => {
    const newArticle = new Article({ title, content, category: categoryId, author });
    return newArticle.save()
}

module.exports = { getAllArticles, getArticleById, createArticle }