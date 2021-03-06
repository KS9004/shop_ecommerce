const app = require('./app');

const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

// Handling Uncaught exceptions

process.on('uncaughtException',err=>{
    console.log('Error:'+ err.stack);
    console.log('Shutting down the server due to uncaught exception');
    server.close(()=>{
     process.exit(1);
    });
})

// Setting config file
dotenv.config({path:'backend/config/config.env'});
// Connect to database

connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log('Server started at:'+ process.env.PORT);
});
// Handline Unhandled Rejection
process.on('unhandledRejection',err=>{
    console.log('Error:'+ err.message);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(()=>{
     process.exit(1);
    });
})