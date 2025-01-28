import express from "express"
const app = express()
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

const PORT = process.env.PORT || 2323
const URI = process.env.MONGODBURI

try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });

  console.log("Connected to MongoDB Successfully....!")
} catch (error) {

  console.log("Cannot Connect to MongoDB Error -->",error)
  
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})