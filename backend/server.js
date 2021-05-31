const app = require("./app");
const dotenv = require("dotenv");
const connectDatabse = require("./config/database");

dotenv.config({ path: 'backend/config/config.env' });

// Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1)
})

// Connection to database
connectDatabse();

// app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`))
const server = app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`))

process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server during database connection');
    server.close(() => {
        process.exit(1)
    })
})