const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//ROUTES
const casesRoute = require('./routes/cases');
app.use('/cases', casesRoute);

app.get('/', (req, res) => {
   res.status(200);
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true } ,
    () => console.log('connected to db')
)

//Port to the application
app.listen(process.env.SERVER_PORT);