// Extends the array proto to have a sample() that takes a random element from the arr
Array.prototype.sample = function () {
  const randNum = Math.floor(Math.random() * this.length);
  return this[randNum];
};

// // Making a request with the XMLHttpRequest object.
// const firstReq = new XMLHttpRequest();
// // Had to use function declaration instead of arrow function to achieve desired 
// // this behaviour
// firstReq.addEventListener('load', function () {
//   console.log('FIRST REQ WORKED!')
//   const data = JSON.parse(this.responseText);
//   // console.log(data.aliases.sample())
//   console.log(`My name is ${data.name} also known as ${data.aliases.sample()}`)

//   // console.log(data.allegiances)
//   // Chaining with XMLHttpRequest
//   const houseUrl = data.allegiances[0];
//   const secondReq = new XMLHttpRequest();
//   secondReq.addEventListener('load', function () {
//     console.log('SECOND REQ WORKED!')
//     const houseData = JSON.parse(this.responseText);
//     console.log(`from ${houseData.name}.`)
//     console.log(`${houseData.words}`)
//   });
//   secondReq.addEventListener('error', (e) => console.log('ERROR ON SECOND REQ', e));
//   secondReq.open('GET', houseUrl);
//   secondReq.send();

// });
// firstReq.addEventListener('error', () => {
//   console.log('ERROR ON FIRST REQ!')
// });
// firstReq.open('GET', 'https://anapioficeandfire.com/api/characters/583');
// firstReq.send();
// console.log('Waiting for response');

// FETCH API

// returns a promise as a Response Object
fetch('https://anapioficeandfire.com/api/characters2/583')
  .then((response) => {
    console.log(response);
    if (response.ok) {
      // .json() method reads the Response object and returns a promise
      // console.log(response.json())
      response.json().then((data) => {
        const { name, aliases, allegiances } = data;
        console.log(`My name is ${name}, also known as ${aliases.sample()}`)
      })
    }
    else {
      // console.log(`ERROR: ${response.status}`)
      throw Error(`Status Code Error: ${response.status}`)
    }
  })
  .catch((err) => {
    console.log('SOMETHING WENT WRONG')
    console.log(err)
  })