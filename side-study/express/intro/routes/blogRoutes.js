const express = require('express');
const route = express.Router()
const { blog_index,
  blog_create_get,
  blog_create_post,
  blog_show,
  blog_delete } = require('../controllers/blogController')
// blog routes


route.get('/', blog_index)
route.get('/create', blog_create_get)
route.post('/', blog_create_post)
route.get('/:id', blog_show)
route.delete('/:id', blog_delete)


module.exports = route