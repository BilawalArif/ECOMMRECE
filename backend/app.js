const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");

//Config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({  limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(fileUpload());

//Route imports

const product = require("./routes/productRoute");
const user = require("./routes/userRoute"); 
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);


// Add this middleware to set the correct host header
app.use((req, res, next) => {
  if (req.headers.host === 'https://ecommerve-bills.onrender.com') {
    req.headers.host = 'ecommerve-bills.com';
  }
  next();
});
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});
//Middleware for Errors

app.use(errorMiddleware);

module.exports = app;
