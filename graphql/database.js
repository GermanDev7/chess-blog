const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/chess-blog'
        )
        console.log('Conecixion a la BD Exitosa')
    } catch (err) {
        console.error('Error al conectar a la bd', error)
        process.exit(1)
    }
}

module.exports = connectDB;