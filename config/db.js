const momgoose = require('mongoose'); //เรียกใช้งาน mongoose

const connectDB = async () => {
    try {
        await momgoose.connect('mongodb://localhost:27017/product',);
        console.log('MongoDB connected');
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = connectDB;