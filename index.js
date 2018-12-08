//dependency
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');

//jsvfbk
//nvfjk
const app =  express();
const constant =  require('./constant.json');


//database
// console.log("db connecting...");
// mongoose.connect(config.db, function (err, done) {
//     if (err) {
//         console.log("connection error" + err);

//     } else {
//         console.log("db connected");
//     }
// });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));




//route mount
const publicRoutes = require('./routes/public');
app.use('',publicRoutes);

const userRoutes = require('./routes/user');
app.use('/user',userRoutes);

app.listen(constant.port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`server is running on port ${constant.port}`);
    }
})
