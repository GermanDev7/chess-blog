const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User')

const authResolver = {
    Mutation: {
        register: async (_, { username, email, password }) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ username, email, password: hashedPassword });
            await user.save();

            const token = jwt.sign({ userId: user.id }, 'SECRET_KEY', { expiresIn: '1h' });
            return { token, user };
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) throw new Error('Usuario no encontrado');

            const valid = await bcrypt.compare(password, user.password);
            if (!valid) throw new Error('Contraseña incorrecta');

            const token = jwt.sign({ userId: user.id }, 'SECRET_KEY', { expiresIn: '1h' });
            return { token, user };
        }
    }

};

module.exports = authResolver;