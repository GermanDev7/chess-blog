const Article = require('../models/Article');
const Category = require('../models/Category');
const User = require('../models/User');

const createArticle = async ({ title, content, categoryId, authorId }) => {
    const categoryExists = await Category.findById(categoryId);
    if (!categoryExists) {
      throw new Error('La categoría no existe');
    }
  
    const authorExists = await User.findById(authorId);
    if (!authorExists) {
      throw new Error('El autor no existe');
    }
  
    const newArticle = new Article({
      title,
      content,
      category: categoryId,
      author: authorId,
    });
  
    return await newArticle.save();
  };
  

  const getAllArticles = async () => {
    return Article.find({ category: { $ne: null } }).populate('category').populate('author');
  };

const getArticleById = async (id) => {
  return Article.findById(id).populate('category').populate('author');
};

module.exports = { getAllArticles, getArticleById, createArticle };
