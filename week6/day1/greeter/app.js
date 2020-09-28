const express = require('express')
// express app
const app = express()
// listen for requests
const server = app.listen(3000, () => console.log('Listening to Port 3000'))


app.get('/greeter', (req, res) => {
  res.send('Hello World!')
})

app.get('/greeter/:someNameHere', (req, res) => {
  res.send(`Hello ${req.params.someNameHere}!`)
})