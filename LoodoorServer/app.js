const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.get('/', (req, res)=>{
    res.send('form');
});


app.get('/posts', (req, res)=>{
    res.send('post form');

});


 mongoose.connect('mongodb+srv://Naveen:$jan123.@cluster0.ihr1j.mongodb.net/sample_airbnb?retryWrites=true&w=majority',
 () => console.log('connected to DB')
 );  
 //mongodb+srv://Naveen:$jan123.@cluster0.ihr1j.mongodb.net/sample_airbnb?retryWrites=true&w=majority
 /* mongoose.connect('mongodb://Naveen:$jan123..mlab.com:55396/sample_airbnb',
 () => console.log('connected to DB')
 );  */
/* 
 const MongoClient = require('mongodb').MongoClient;
 const uri = "mongodb+srv://Naveen:$jan123.@cluster0.ihr1j.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
 const client = new MongoClient(uri, { useNewUrlParser: true });
 client.connect(err => {
   const collection = client.db("sample_airbnb").collection("devices");
   // perform actions on the collection object
   console.log("connectde to db");
   client.close();
 }); */
 

app.listen(3000);  
