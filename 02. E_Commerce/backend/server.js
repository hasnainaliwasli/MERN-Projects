const app = require("./app")
const dotenv = require('dotenv')
const connectDatabase = require("./config/database")

dotenv.config({ path: "backend/config/config.env" })

// Connect to MongoDB
connectDatabase()

app.listen(process.env.PORT, () => {
  console.log(`Connected ! App is running on Port ${process.env.PORT}`)
})