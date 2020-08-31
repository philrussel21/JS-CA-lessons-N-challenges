const commonCharacters = (string1, string2) => {
  // Your code here
  const newString1 = string1.toLowerCase().split('').map(char => char.trim()).join('')
  const newString2 = string2.toLowerCase().split('').map(char => char.trim()).join('')

  const commonChar = [];
  for (let char of newString1) {
    if (commonChar.indexOf(char) === -1) {
      if (newString2.includes(char)) {
        commonChar.push(char)
      }
    }
  }
  return commonChar.join('')
}