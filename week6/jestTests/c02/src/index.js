function countCapitalLetters(str) {
  const capLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
  let counter = 0

  if (!(str.trim()) || typeof str !== 'string') {
    throw ("Argument provided is either empty or not a string")
  }

  for (let char of str) {
    if (capLetters.includes(char)) counter++
  }

  return counter
}

module.exports = { countCapitalLetters }