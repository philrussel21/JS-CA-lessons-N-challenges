const express = require('express')
const fetch = require("node-fetch")
const fs = require('fs')
const mongoose = require('mongoose');
const Comment = require('./comment_schema')

const app = express()
const port = 3000
const server = app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})

app.use(express.json())

app.get('/', (req, res) => {
  res.send('WELCOME')
})

app.get('/comments/:email', async (req, res) => {
  const email = req.params.email
  const comments = await Comment.find({ email })
  res.json(comments)
})

const dbConn = "mongodb://localhost/comments_app"
mongoose.connect(dbConn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, (err) => {
  if (err) {
    console.log('Error Connecting to the database', err)
  } else {
    console.log('Connected to database!')
  }
})

const fetchData = async () => {
  try {
    const dataUrl = 'https://jsonplaceholder.typicode.com/comments'
    const response = await fetch(dataUrl)
    const data = await response.json()
    let json = JSON.stringify(data, null, 2);

    if (!fs.existsSync('./comments.json')) {
      fs.writeFile('comments.json', json, 'utf8', (err) => {
        if (err) throw err;
        console.log('Data Written to file')
        writeOnDb()
        console.log('Comments written on DB')
      });
    }
  } catch (err) {
    console.log(err)
  }
}





function writeOnDb() {
  const comments = require('./comments.json')
  for (let comment of comments) {
    const { name, email, body } = comment
    const newComment = new Comment({ name, email, body })
    newComment.save(err => {
      if (err) {
        console.log(err)
      }
    })
  }
}

fetchData();