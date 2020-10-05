const { books } = require('../models/books');
const utilities = require('../utils/utilities');

const index = (req, res) => {
  res.send(books)
}

const show = (req, res) => {
  const book = utilities.getBook(req.params.id)
  res.send(book)
}

const create = (req, res) => {
  const newBook = req.body
  const dBLastId = books[books.length - 1].id
  newBook['id'] = dBLastId + 1
  books.push(newBook)
  res.send(books)
}

const update = (req, res) => {
  const bookId = req.params.id
  const book = utilities.getBook(bookId)
  const updatedBook = req.body

  book.name = updatedBook.name
  book.author = updatedBook.author
  book.movie = updatedBook.movie

  res.send(book)
}

const destroy = (req, res) => {
  const bookId = req.params.id
  const book = utilities.getBook(bookId)
  const bookIdx = books.indexOf(book)
  books.splice(bookIdx, 1)

  res.send(books)
}



module.exports = {
  index,
  show,
  create,
  update,
  destroy
}