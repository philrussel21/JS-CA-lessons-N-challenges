const rps = (player1, player2) => {
  let playOne = player1.toLowerCase();
  let playTwo = player2.toLowerCase();
  let playOneWins = 'The winner is Player 1';
  let playTwoWins = 'The winner is Player 2';

  if (playOne === playTwo) return 'It\'s a draw'

  if (playOne === 'rock') {
    switch (playTwo) {
      case 'scissors':
        return playOneWins;
      case 'paper':
        return playTwoWins;
    }
  }
  else if (playOne === 'paper') {
    switch (playTwo) {
      case 'rock':
        return playOneWins
      case 'scissors':
        return playTwoWins
    }
  }
  else {
    switch (playTwo) {
      case 'rock':
        return playTwoWins
      case 'paper':
        return playOneWins
    }
  }
};

// Chief Keef's solution
// const rps = (player1, player2) => {
//   player1 = player1.toLowerCase()
//   player2 = player2.toLowerCase()

//   if (player1 == player2) return "It's a draw"

//   const lookup = {
//     rock: {
//       scissors: 'Player 1',
//       paper: 'Player 2'
//     },
//     paper: {
//       rock: 'Player 1',
//       scissors: 'Player 2'
//     },
//     scissors: {
//       paper: 'Player 1',
//       rock: 'Player 2'
//     }
//   }

//   return `The winner is ${lookup[player1][player2]}`
// };