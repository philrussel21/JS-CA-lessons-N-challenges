const exesAndOhs = (string) => {
  // Your code here
  if (string === '') return true;
  return string.toLowerCase().match(/x+/g)[0].length === string.toLowerCase().match(/o+/g)[0].length
}

console.log(exesAndOhs(""));