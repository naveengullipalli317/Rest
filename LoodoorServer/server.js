const express = require('express');
const connectDB = require('./DB/connection');

const app = express();
connectDB();
app.use(express.json({extended:false}));
app.use('/api/userModel', require('./Api/user'));
const port = process.env.port  || 3000;
app.listen(port, () => console.log("Server Started"));