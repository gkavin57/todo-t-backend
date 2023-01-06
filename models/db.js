const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
module.exports = mongoose.connect(
  process.env.MONGO_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) console.log(`Error in DB Connection ${err}`);
    console.log(`MongoDB connection suceeded`);
  }
);

// 2CQniovQzNFssKa9
