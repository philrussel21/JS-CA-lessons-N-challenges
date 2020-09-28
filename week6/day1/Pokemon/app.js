const express = require('express')
const fetch = require('node-fetch')
// express app
const app = express()
// listen for requests
const server = app.listen(3000, () => console.log('Listening to Port 3000'))



app.get('/teamBuilder/:pokeNum', async (req, res) => {
  const pokeTeamNum = req.params.pokeNum
  const pokeTeam = await fetchTeam(pokeTeamNum)
  res.send({ "data": pokeTeam })
})



async function fetchRandPokemon() {
  const randNum = Math.floor(Math.random() * 808)
  const pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
    .then(res => res.json())
  const { name, types, sprites } = pokeData
  const type = types.map((t) => t.type.name)
  const sprite = sprites.front_default

  return { name, type, sprite }
}

async function fetchTeam(teamNum) {
  const promiseArr = []
  for (let i = 0; i < teamNum; i++) {
    promiseArr.push(fetchRandPokemon())
    console.log(fetchRandPokemon())
  }
  const team = await Promise.all(promiseArr)
  return team
}