const express = require('express')
const errorMiddleware = require('./middleware/error.js')
const app = express()
app.use(express.json())

// All Routes imports
const product = require("./routes/productRoute.js")

app.use("/api/v1", product)


// Middleware for Errors
app.use(errorMiddleware)

module.exports = app