const mongoose = require('mongoose');
const dotenv= require('dotenv')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI
        )
        console.log('Conecixion a la BD Exitosa')
    } catch (err) {
        console.error('Error al conectar a la bd', error)
        process.exit(1)
    }
}

module.exports = connectDB;