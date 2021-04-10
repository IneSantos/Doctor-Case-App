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

const usersRoute = require('./routes/auth');
app.use('/login', usersRoute);
app.use('/logout', usersRoute);

app.get('/', (req, res) => {
   res.status(200);
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true } ,
    () => console.log('connected to db')
)

//Port to the application
app.listen(process.env.SERVER_PORT, () => console.log(`This app is listening on port ${process.env.SERVER_PORT}`));