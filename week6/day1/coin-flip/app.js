const express = require('express')
// express app
const app = express()
// listen for requests
const server = app.listen(3000, () => console.log('Listening to Port 3000'))


app.get('/coinflip', (req, res) => {
  const coinFace = coinFlip()
  res.send(coinFace)
})

app.get('/coinflip/:numOfFlips', (req, res) => {
  const numOfFlips = req.params.numOfFlips
  const results = { 'heads': 0, 'tails': 0 }
  for (let i = 0; i < numOfFlips; i++) {
    const coinFace = coinFlip()
    results[coinFace] += 1
  }
  res.send(results)
})

function coinFlip() {
  return Math.random() > 0.5 ? 'heads' : 'tails'
}