const User = require('../models/User')
const bcrypt = require('bcryptjs');


const registerUser = async ({ username, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    return newUser.save();
}

const verifyPassword = async (candidatePasssword, storedPassword) => {
    return bcrypt.compare(candidatePasssword, storedPassword);
}

const getAllUsers = async () => {
    return User.find()
}

const getUserById = async (id) => {
    return User.findById(id);
}

const createUser = async ({ username, email, password }) => {
    const newUser = new User({ username, email, password });
    return newUser.save()
}

module.exports = { getAllUsers, getUserById, createUser, registerUser, verifyPassword }