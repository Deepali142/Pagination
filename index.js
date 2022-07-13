const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

// Used for password security unique code
const Bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/Pagination')
.then(() =>{
    console.log("Database connected successfully")
}).catch((err) =>{
    console.log(" Error found ");
});

const app = express();
app.use(bodyParser.json())

const userRouter = require('./router/app');
app.use('/user',userRouter);

app.listen(3100, () =>{
    console.log("Listening at the port 3100"); 
});

