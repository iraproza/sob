const express = require("express");
const cors = require("cors");
const parser = require('body-parser')

//Error Middleware
const errorMiddleware = require("./middleware/errors");
const jsonMiddleware = parser.json()

const app = express();
const productRouter = require("./routes/productsRoute");
app.use(jsonMiddleware);
app.use(cors())
app.use("/api/v1/",productRouter)

app.use(errorMiddleware);

module.exports = app;
