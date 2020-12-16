const mongoose = require('mongoose');
const URI = 'mongodb+srv://dbUser:dbUser@cluster0.pptza.mongodb.net/test2?retryWrites=true&w=majority';

const connectDB = async () => {
    await mongoose.connect(URI,
         { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('db connected');
};


module.exports = connectDB;
