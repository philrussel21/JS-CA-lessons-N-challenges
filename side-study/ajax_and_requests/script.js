// Extends the array proto to have a sample() that takes a random element from the arr
Array.prototype.sample = function () {
  const randNum = Math.floor(Math.random() * this.length);
  return this[randNum];
};

// Making a request with the XMLHttpRequest object.
const firstReq = new XMLHttpRequest();
// Had to use function declaration instead of arrow function to achieve desired 
// this behaviour
firstReq.addEventListener('load', function () {
  console.log('WORKED!')
  const data = JSON.parse(this.responseText);
  console.log(data.aliases.sample())
  console.log(`My name is ${data.name} also known as ${data.aliases.sample()}`)
});
firstReq.addEventListener('error', () => {
  console.log('ERROR!')
});
firstReq.open('GET', 'https://anapioficeandfire.com/api/characters/583');
firstReq.send();
console.log('Waiting for response');