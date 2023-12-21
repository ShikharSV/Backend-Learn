const mongoose = require('mongoose')
const DB_Name = require('../constants.js')

const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`mongoDB connection successfull. DB host: ${connection.connection.host}`);
    } catch (error) {
        console.log("failed to connect to database", error);
        process.exit(1);
    }
}

module.exports = connectDB;