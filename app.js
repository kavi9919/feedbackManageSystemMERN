const express = require('express');
const cors = require('cors');
require('dotenv').config({path: './env/.env'});
const mongoose = require('mongoose');
const config = require('config');


const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const feedbackRoutes = require('./src/routes/feedbackRoutes');
const responseFormatter = require('./src/middleware/responseFormatter');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

// This will allow all origins
app.use(cors()); 

//Middlewares
app.use(express.json());
app.use(responseFormatter);
app.use(errorHandler);




//Routes
app.use('/api', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/feedback', feedbackRoutes);


//Database connection
mongoose.connect(config.get('db.uri'))
    .then(()=> console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`Server listening on port ${port}...`));