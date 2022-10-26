const express = require('express')
const port = 8000
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/mongoose')
const todoRoutes = require('./routes/todoRoutes')


// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// todo route
app.use('/', todoRoutes);

// app.get('/', (req,res) => {
//     res.send("My todo...");
// })

app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`running server on port: ${port}`);
});