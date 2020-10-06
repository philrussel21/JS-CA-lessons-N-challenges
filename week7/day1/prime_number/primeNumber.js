function primeNumber(number) {
  if (typeof number !== 'number') throw ('primeNumber only accepts numbers')

  const primeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 57, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227]
  for (let i = 0; i < primeNums.length; i++) {
    const currEl = primeNums[i];
    if (currEl > number) {
      return primeNums[i - 1]
    }
  }
}


module.exports = primeNumber