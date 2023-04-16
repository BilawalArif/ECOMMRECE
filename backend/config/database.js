const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(
      process.env.DB_URI,
      { useUnifiedTopology: true },
      { useNewUrlParser: true }
    )
    .then((data) => {
      console.log(`Connected to Database: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
