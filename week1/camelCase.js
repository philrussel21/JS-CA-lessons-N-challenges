function toCamelCase(str) {
  if (str.includes('-')) {
    const arr = str.split('-')
    for (let i = 1; i < arr.length; i++) {
      const followingWords = arr[i].split('')
      followingWords[0] = followingWords[0].toUpperCase()
      arr[i] = followingWords.join('')
    }
    return arr.join('')
  }
  else if (str.includes('_')) {
    const arr = str.split('_')
    for (let i = 1; i < arr.length; i++) {
      const followingWords = arr[i].split('')
      followingWords[0] = followingWords[0].toUpperCase()
      arr[i] = followingWords.join('')
    }
    return arr.join('')
  }
  else {
    return str
  }
}

console.log(toCamelCase(''))