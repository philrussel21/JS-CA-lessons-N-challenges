const { books } = require('../models/books')

const getBook = (id) => {
  const book = books.find(b => b.id == id) //enables type coercion
  return book
}


module.exports = {
  getBook
}