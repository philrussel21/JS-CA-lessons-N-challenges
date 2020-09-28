const express = require('express')

// express app
const app = express()

// register view engine
app.set('view engine', 'ejs');

// listen for requests
const server = app.listen(3000, () => console.log('Listening to Port 3000'))

app.get('/', (req, res) => {

  // infers the type of content to the browser so no need to setHeader the content
  // also infers the status code but can also be customized
  // res.send('<h1> Home Page <h1>')

  // Instead of writing the html, send the html file to instead
  // res.sendFile('./views/index.html', { root: __dirname })

  // renders the index page found in views directory with the help of ejs
  res.render('index')

})

app.get('/about', (req, res) => {
  // res.send('<h1>About Page<h1>')

  // res.sendFile('./views/about.html', { root: __dirname })
  res.render('about')
})

app.get('/blogs/create', (req, res) => {
  res.render('create')
})

// Redirects
app.get('/about-me', (req, res) => {
  res.redirect('/about')
})

// 404 Error Page
// .use is a middleware
// This file runs from top to bottom, so it checks for any matching routes above
// and only gets to this route IF no match is found, hence 404 Not Found
app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', { root: __dirname })

  res.status(404).render('404')
})