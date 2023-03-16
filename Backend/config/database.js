const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("mongoDB Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDatabase;
