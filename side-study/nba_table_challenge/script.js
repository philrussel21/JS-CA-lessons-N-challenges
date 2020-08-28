
// NBA Table Challenge
const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]



const yourTeam = 'Golden State'
const parentUL = document.querySelector('ul')
for (let game of warriorsGames) {
  const newLI = document.createElement('li')
  // const away = game.awayTeam
  // const home = game.homeTeam
  const { awayTeam: away, homeTeam: home } = game;

  newLI.textContent = `${away.team} @ ${home.team} `

  if (away.isWinner) {
    newLI.innerHTML += `<b>${away.points}</b> - ${home.points}`
    newLI.classList.add(winOrLose(away))
  }
  else {
    newLI.innerHTML += `${away.points} - <b>${home.points}</b>`
    newLI.classList.add(winOrLose(home))
  }


  parentUL.append(newLI)
}

function winOrLose(winner) {
  return winner.team === yourTeam ? 'win' : 'lose'
}