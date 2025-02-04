import express from "express"
import cors from 'cors'
const app = express()
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
import bookRoute from './routes/book.route.js'
import userRoute from './routes/userRoute.js'
const PORT = process.env.PORT || 2323
const URI = process.env.MONGODBURI

app.use(cors())
app.use(express.json())
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB Successfully....!")
} catch (error) {
  console.log("Cannot Connect to MongoDB Error -->", error)
}

app.use("/book", bookRoute);
app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})