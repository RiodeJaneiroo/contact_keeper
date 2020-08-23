require('dotenv').config();

const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
         useFindAndModify: false,
      });

      console.log('MongoDB connected');
   } catch (err) {
      console.log(err.nessage);
      process.exit(1);
   }
};

module.exports = connectDB;
