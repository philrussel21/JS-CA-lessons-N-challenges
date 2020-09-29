const { render } = require('ejs');
const express = require('express')
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express()

// mongoDB Atlas
const dbURI = "mongodb+srv://philrussel21:philrussel21@simple-blogsite.tcusw.mongodb.net/express-blog-site?retryWrites=true&w=majority"
// connects to the above database - Returns a promise
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then((res) => {
    console.log('connected to the db')
    // would only open up a server when the app successfully connects to the db
    // listen for requests
    const server = app.listen(3000, () => console.log('Listening to Port 3000'))
  })
  .catch((err) => console.log(err))

// register view engine
app.set('view engine', 'ejs');


// Middlewares - runs every time in between request and response depending
// on the position in the code.

// Middleware from express to make public directory to make static files
// accessible by the app, and by the public
app.use(express.static('public'))

// Middleware
app.use((req, res, next) => {
  console.log("New Request Made:")
  console.log('host:', req.hostname)
  console.log('path:', req.path)
  console.log('method', req.method)
  console.log('Time:', Date.now())
  next()
})

// Middleware for incoming form data
app.use(express.urlencoded({ extended: true }))

// Routes


app.get('/', (req, res) => {

  // infers the type of content to the browser so no need to setHeader the content
  // also infers the status code but can also be customized
  // res.send('<h1> Home Page <h1>')

  // Instead of writing the html, send the html file to instead
  // res.sendFile('./views/index.html', { root: __dirname })


  // renders the index page found in views directory with the help of ejs
  // res.render('index', { blogs })

  // redirects to /blogs intead to show all blogs
  res.redirect('/blogs')

})

app.get('/about', (req, res) => {
  // res.send('<h1>About Page<h1>')

  // res.sendFile('./views/about.html', { root: __dirname })
  res.render('about', { title: 'Ninjas' })
})

// Redirects
app.get('/about-me', (req, res) => {
  res.redirect('/about')
})


app.get('/blogs/create', (req, res) => {
  res.render('create')
})

app.get('/blogs', async (req, res) => {
  try {
    // finds all blogs then .sort() sorts them according to the provided field, -1 for newest to oldest
    // createdAt is the auto generated field created by mongodb when given the timestamp on the Schema
    const blogs = await Blog.find().sort({ createdAt: -1 })
    res.render('index', { blogs })
  } catch (error) {
    console.log(error)
  }
})

// Create new blog
app.post('/blogs', (req, res) => {
  // const { title, snippet, body } = req.body

  // const newBlog = new Blog({
  //   title, snippet, body 
  // }) or

  const newBlog = new Blog(req.body)

  newBlog.save()
    .then(resolve => {
      res.redirect('/')
    }).catch(err => console.log(err))
})

// Show/find certain blog
app.get('/blogs/:id', async (req, res) => {
  try {
    const blogId = req.params.id
    const blog = await Blog.findById(blogId)
    res.render('show', { blog })
  } catch (error) {
    console.log(error)
  }
})

// 404 Error Page
// .use is a middleware
// This file runs from top to bottom, so it checks for any matching routes above
// and only gets to this route IF no match is found, hence 404 Not Found
app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', { root: __dirname })

  res.status(404).render('404')
})



// // mongoose and mongo sandbox routes
// // creates a new blog and saves to the database
// app.get('/add-blog', async (req, res) => {
//   // ideally would follow the Schema defined to the Blog class/model
//   const blog = new Blog({
//     title: 'another new blog',
//     snippet: 'about my new blog',
//     body: "There's more about my new blog!"
//   })

//   // async method that returns a promise
//   // saves the newly created blog instance at the top to the db in accordance to the schema
//   // blog.save()
//   // .then((result) => {
//   //   res.send(result)
//   // })
//   // .catch((err) => {
//   //   console.log(err)
//   // })
//   try {
//     const result = await blog.save()
//     res.send(result)
//   } catch (err) {
//     console.log(err)
//   }
// })

// // grabs every blog from the collection in the db
// app.get('/all-blogs', async (req, res) => {

//   try {
//     const blogs = await Blog.find()
//     res.send(blogs)
//   } catch (error) {
//     console.log(error)
//   }
// })

// // grabs a particular blog from the collection in the db
// app.get('/single-blog', async (req, res) => {
//   // mongoose accepts a string then converts that string into the ObjectId type
//   // that is saved in the MongoDB to find the particular blog
//   try {
//     const blog = await Blog.findById("5f731deb1943c246ea239397")
//     res.send(blog)
//   } catch (error) {
//     console.log(error)
//   }
// })