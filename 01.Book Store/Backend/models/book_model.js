import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  image: String
})

const Book = mongoose.model('Book', bookSchema);

export default Book;
