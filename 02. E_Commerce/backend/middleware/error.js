const ErrorHandler = require('../utils/errorhandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;  // ✅ Fix typo
  err.message = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,  // ✅ Send only the error message
  });
};
