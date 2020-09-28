const express = require("express")

const app = express()
const port = 3000

app.get('/', (req, res) => {
  return res.send("Hello World from Express!")
})

// listen to a specific port
app.listen(port, () => console.log(`Listening to port ${port}`))