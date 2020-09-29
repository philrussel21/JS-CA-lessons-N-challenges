const express = require('express')
const { books } = require("./books")
const app = express()

// Make sure you understand how your data is being sent to you before deciding to use
// either json() or urlencoded()
app.use(express.json())
// app.use(express.urlencoded())
const PORT = 3000

app.listen(PORT, () => {
  console.log(`Your app is running on port ${PORT}, QUICK!! go catch it!!`)
})

app.get('/', (req, res) => {
  res.send('<h1>Welcome to your homepage!</h1>')
})

app.post('/books', (req, res) => {
  console.log('body')
  console.log(req.body)
  console.log('query')
  console.log(req.query)
  res.send(req.body)
})