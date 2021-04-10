const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true } ,
    () => console.log('connected to db')
)

//Port to the application
app.listen(process.env.APP_PORT);