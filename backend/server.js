const app = require('./app');

const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

// Setting config file
dotenv.config({path:'backend/config/config.js'});
// Connect to database

connectDatabase();

app.listen(4000,()=>{
    console.log('Server started at:')
});