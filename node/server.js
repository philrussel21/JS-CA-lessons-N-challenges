const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request Made')
  console.log(req.url, req.method)

  // set header content type to text/plain to send normal text
  // res.setHeader('Content-Type', 'text/plain')

  // res.write('Hello World!')
  // res.end()

  // set header content type to text/html to send html
  res.setHeader('Content-Type', 'text/html')

  res.write('<h1>Hello, World!</h1>')
  res.write('<p>Greetings from Mars!</p>')
  res.end()
})

server.listen(3000, 'localhost', () => {
  // code when we start listening
  console.log('Listening on requests made on port 3000')
})