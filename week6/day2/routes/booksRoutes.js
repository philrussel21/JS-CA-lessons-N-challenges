const express = require('express');
const router = express.Router()
const BooksController = require('../controllers/booksController');

router.get('/', BooksController.index)
router.get('/:id', BooksController.show)
router.post('/', BooksController.create)
router.put('/:id', BooksController.update)
router.delete('/:id', BooksController.destroy)


module.exports = router