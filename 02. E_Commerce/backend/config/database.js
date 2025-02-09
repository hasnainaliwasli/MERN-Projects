const mongoose = require("mongoose")

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI)
    console.log("MongoDB Connected with server : ", connection.connection.host)

  } catch (err) {
    console.log("Error while mongodb connection", err)
  }
}

module.exports = connectDatabase