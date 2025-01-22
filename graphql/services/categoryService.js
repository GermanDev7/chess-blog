const Category = require('../models/Category');

const getAllCategories = async () => {
    return Category.find();
}

const getCategoryById = async (id) => {
    return Category.findById(id);
}


module.exports = { getAllCategories, getCategoryById }