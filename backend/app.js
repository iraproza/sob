const express = require("express");
const cors = require("cors");

//Error Middleware
const errorMiddleware = require("./middleware/errors");

const app = express();
const productRouter = require("./routes/productsRoute");
app.use(cors())

app.use("/api/v1/",productRouter)

app.use(errorMiddleware);

module.exports = app;
