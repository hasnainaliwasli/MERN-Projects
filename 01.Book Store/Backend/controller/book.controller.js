import bookModel from '../models/book_model.js';

const getBook = async (req, res) => {
  try {
    const book = await bookModel.find();
    res.status(200).json(book)
  } catch (error) {
    console.log("Error in Book Controller", error);
    res.status(500).json(error)
  }
}


export default getBook;