const momgoose = require('mongoose'); //เรียกใช้งาน mongoose

const connectDB = async () => {
    try {
        await momgoose.connect('mongodb+srv://BasZ4ll:0631035623@cluster0.czt1tyd.mongodb.net/product',);
        console.log('MongoDB connected');
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = connectDB;