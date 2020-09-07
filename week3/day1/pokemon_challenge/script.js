// const btn = document.querySelector('#poke-btn');
// btn.addEventListener('click', () => {
//   const newH2 = document.createElement('h2');
//   const newImg = document.createElement('img')

//   const randNum = Math.floor(Math.random() * 200);
//   axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
//     .then((res) => {
//       const pokeName = res.data.name
//       const pokeImg = res.data.sprites.front_default

//       newH2.textContent = pokeName
//       newImg.src = pokeImg

//       document.body.append(newH2)
//       document.body.append(newImg)
//     })
// })


const btn = document.querySelector('#poke-btn');
btn.addEventListener('click', () => {
  const randNum = Math.floor(Math.random() * 200);
  getPokemon(randNum)
})

async function getPokemon(pokeNum) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
  const pokeName = res.data.name
  const pokeImg = res.data.sprites.front_default

  const newH2 = document.createElement('h2');
  const newImg = document.createElement('img');

  newH2.textContent = pokeName
  newImg.src = pokeImg

  document.body.append(newH2)
  document.body.append(newImg)
}