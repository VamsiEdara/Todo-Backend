const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log(`DB connected succesful`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
