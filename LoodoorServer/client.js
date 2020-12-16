const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('form');

});

app.get('/posts', (req, res)=>{
    res.send('post form');

});

app.listen(3000);