const mongoose = require('mongoose');
mongoose.Promise = global.Promise;



const connectDatabase =() =>{
  // Connecting to the database
const  options = {
    useNewUrlParser:  true,
    useUnifiedTopology:  true,
    userCreateIndex:true
    };
    
    // Connect MongoDB Atlas using mongoose connect method
    mongoose.connect("mongodb+srv://dbSaurabh:12345@cluster0.mw2dk.mongodb.net/ShopEcom?retryWrites=true&w=majority", options).then(() => {
    console.log("Database connection established!");
    },
    err  => {
    {
    console.log("Error connecting Database instance due to:", err);
    }
    });
}

module.exports = connectDatabase;