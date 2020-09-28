const express = require("express")
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const students = ['lachy', 'ben', 'anfii']
const studentOne = students[Math.floor(Math.random() * students.length)];
const studentTwo = students[Math.floor(Math.random() * students.length)];

// for handlebars acc to docs
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// body parser middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Middleware for all
// .use means it's a middleware
app.use((req, res, next) => {
  console.log('Time', Date.now())
  next()
})

// middleware for certain routes
// passed as a second argument in this usage but can have multiple
// middlewares and chained together by passing another as a callback
// app.post("/students", (req,res,next) => {
//   console.log("middleware running")
//   next()
// }, (req,res) => {
//   res.send(students)
// })

app.get('/', (req, res) => {
  // res.send("Hello World from Express!")

  // rendering using the provided views with handlebars, looks for the file that matches the string passed as an argument
  // passing dynamic data
  res.render('home', {
    studentOne: studentOne,
    studentTwo: studentTwo
  })
})

// access to students var in the certain route
app.get("/students", (req, res) => {
  res.send(students)
})

// Add someone to the current students
app.post('/add', (req, res) => {
  console.log(req.body)
  students.push(req.body.name)
  res.send(students)
})

// listen to a specific port
app.listen(port, () => console.log(`Listening to port ${port}`))