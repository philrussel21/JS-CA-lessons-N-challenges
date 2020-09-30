const Blog = require('../models/blog');

// blogs controllers
const blog_index = async (req, res) => {
  try {
    // finds all blogs then .sort() sorts them according to the provided field, -1 for newest to oldest
    // createdAt is the auto generated field created by mongodb when given the timestamp on the Schema
    const blogs = await Blog.find().sort({ createdAt: -1 })
    res.render('index', { blogs })
  } catch (error) {
    console.log(error)
  }
}


// Create new blog

const blog_create_get = (req, res) => {
  res.render('create')
}

const blog_create_post = (req, res) => {
  // const { title, snippet, body } = req.body

  // const newBlog = new Blog({
  //   title, snippet, body 
  // }) or

  const newBlog = new Blog(req.body)

  newBlog.save()
    .then(resolve => {
      res.redirect('/')
    }).catch(err => console.log(err))
}

// Show/find certain blog

const blog_show = async (req, res) => {
  try {
    const blogId = req.params.id
    const blog = await Blog.findById(blogId)
    res.render('show', { blog })
  } catch (error) {
    console.log(error)
  }
}

// Delete blog
const blog_delete = (req, res) => {
  const blogId = req.params.id

  Blog.findByIdAndDelete(blogId)
    .then(result => {
      // responds back to the FrontEnd with JSON file that has the route where to
      // redirect after deleting a document.
      res.json({
        redirect: '/blogs'
      })
    })
    .catch(err => console.log(err))
}

module.exports = {
  blog_index,
  blog_create_get,
  blog_create_post,
  blog_show,
  blog_delete
}