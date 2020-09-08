function findNeedle(haystack) {
  const coords = [];
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i].includes('N')) {
      coords.push(i)
      const needleIdx = haystack[i].indexOf('N')
      coords.push(needleIdx)
      return coords
    }
  }
}
const stack = [
  ['H', 'H', 'H'],
  ['H', 'H', 'H'],
  ['H', 'N', 'H']
]
console.log(findNeedle(stack))