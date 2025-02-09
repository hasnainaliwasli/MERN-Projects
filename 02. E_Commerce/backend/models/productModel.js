const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product name"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Please Enter Product description"]
  },
  price: {
    type: String,
    required: [8, "Must Enter price less than 8 characters"]
  },
  rating: {
    type: Number,
    default: 0
  },
  image: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product category"]
  },
  stock: {
    type: Number,
    require: [true, "Please Enter Product stock"],
    maxLength: [4, 'Stock cannot exceed by 4 character'],
    default: 1
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      name: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Product", productSchema)