const express = require('express')
const booksRouter = require('./routes/booksRoutes');


const app = express()
const PORT = 3000

// Make sure you understand how your data is being sent to you before deciding to use
// either json() or urlencoded()
app.use(express.json())
// app.use(express.urlencoded())


const server = app.listen(PORT, () => {
  console.log(`Your app is running on port ${PORT}, QUICK!! go catch it!!`)
})

app.get('/', (req, res) => {
  res.send('<h1>Welcome to your homepage!</h1>')
})

app.use('/books', booksRouter)

module.exports = {
  server,
  app
}