const Category = require('../models/Category');

const createCategory = async ({ name, description }) => {
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
        throw new Error('La categoria ya existe');
    }

    const newCategory = new Category({ name, description });
    return await newCategory
}

const getAllCategories = async () => {
    return Category.find();
}

const getCategoryById = async (id) => {
    return Category.findById(id);
}


module.exports = { getAllCategories, getCategoryById, createCategory }