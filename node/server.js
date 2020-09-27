const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('Request Made')
  console.log(req.url, req.method)

  // set header content type to text/plain to send normal text
  // res.setHeader('Content-Type', 'text/plain')

  // res.write('Hello World!')
  // res.end()

  // set header content type to text/html to send html elements
  // res.setHeader('Content-Type', 'text/html')

  // res.write('<h1>Hello, World!</h1>')
  // res.write('<p>Greetings from Mars!</p>')
  // res.end()

  // set header content type to text/html to send html files
  res.setHeader('Content-Type', 'text/html')

  // read file using fs module
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err)
      res.write('<h1>Sorry, something went wrong!<h1>')
      res.end()
    }
    else {
      // res.write(data)
      // if only using write() once, the argument can be passed to the end() method and wouls still do the trick.
      res.end(data)
    }
  })
})

server.listen(3000, 'localhost', () => {
  // code when we start listening
  console.log('Listening on requests made on port 3000')
})