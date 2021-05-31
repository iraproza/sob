const ErrorHandler = require("../helpers/errorHandler");
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === "DEVELOPMENT"){
        console.log(err)
        res.status(err.statusCode).json({
            sucess: false,
            err: err,
            errMessage: err.errMessage,
            stack: err.stack
        });
    }
    if (process.env.NODE_ENV === "PRODUCTION"){
       let error = { ...err };
       error.message = err.message;

 // Mongoose Object ID Error
 if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`
    error = new ErrorHandler(message, 400)
}

// Mongoose Validation Error
if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(value => value.message);
    error = new ErrorHandler(message, 400)
}

// Mongoose duplicate key errors
if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`
    error = new ErrorHandler(message, 400)
}

       res.status(error.statusCode || 500).json({
           status: false,
           message: error.message || "Internal server error"
       });
    }

}