const ErrorHandler = require("../utils/errorHander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong Mongodb Id Error

  if (err.name === "CastError") {
    const message = `Resource not forund. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose Duplicate key error

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }
  // Wrong JSON Web Token
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token Invalid, Try again`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Expire Error
  if (err.name === "TokenExpireError") {
    const message = `Json Web Token Expired, Try again`;
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({ success: false, error: err.message });
};
