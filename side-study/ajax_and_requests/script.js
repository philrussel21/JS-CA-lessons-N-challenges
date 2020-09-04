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
// fetch('https://anapioficeandfire.com/api/characters2/583')
//   .then((response) => {
//     console.log(response);
//     if (response.ok) {
//       // .json() method reads the Response object and returns a promise
//       // console.log(response.json())
//       response.json().then((data) => {
//         const { name, aliases, allegiances } = data;
//         console.log(`My name is ${name}, also known as ${aliases.sample()}`)
//       })
//     }
//     else {
//       // console.log(`ERROR: ${response.status}`)
//       throw Error(`Status Code Error: ${response.status}`)
//     }
//   })
//   .catch((err) => {
//     console.log('SOMETHING WENT WRONG')
//     console.log(err)
//   })

// Chaining with Fetch
// fetch('https://anapioficeandfire.com/api/characters/583')
//   .then((response) => {
//     // console.log(response);
//     if (!response.ok) throw Error(`Status Code Error: ${response.status}`);
//     // .json() method reads the Response object and returns a promise
//     // console.log(response.json())
//     // returns the read Response object as a promise that contains all the data
//     return response.json();
//   })
//   .then((data) => {
//     // retrieves the data that was passed from resolved of the previous promise
//     const { name, aliases, allegiances } = data;
//     console.log(`My name is ${name}, also known as ${aliases.sample()}`);
//     const houseUrl = allegiances[0];
//     // console.log(houseUrl)

//     // calls a fetch on another url that would return a Response object
//     return fetch(houseUrl);
//   })
//   .then((response) => {
//     // incoming object is going to be a response promise object that needs to be converted
//     // console.log(response);
//     if (!response.ok) throw Error(`Status Code Error: ${response.status}`);
//     // .json() method reads the Response object and returns a promise
//     // console.log(response.json())
//     // returns the read Response object as a promise that contains all the data if valid
//     return response.json();
//   })
//   .then((data) => {
//     // retrieves the data that was passed from resolved of the previous promise
//     const { name, words } = data;
//     console.log(`${words} of ${name}`)
//   })
//   .catch((err) => {
//     console.log('SOMETHING WENT WRONG');
//     console.log(err);
//   })


// More on Fetch Chaining - cleaning up with named callback functions
// const firstPage = 'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10'
// const secondPage = 'https://www.anapioficeandfire.com/api/characters?page=2&pageSize=10'

// const checkStatusAndParse = (response) => {
//   // incoming object is going to be a response promise object that needs to be converted
//   // console.log(response);
//   if (!response.ok) throw Error(`Status Code Error: ${response.status}`);
//   // .json() method reads the Response object and returns a promise
//   // console.log(response.json())
//   // returns the read Response object as a promise that contains all the data
//   return response.json();
// }

// const printNames = (data) => {
//   // retrieves the data that was passed from resolved of the previous promise
//   for (let record of data) {
//     console.log(record.aliases[0] || record.name)
//   }
//   // Automaticall returns a resolved Promise to keep the .then moving
//   return Promise.resolve(secondPage);
// }

// const fetchMoreNames = (url) => {
//   return fetch(url)
// }

// fetch(firstPage)
//   .then(checkStatusAndParse)
//   .then(printNames)
//   .then(fetchMoreNames)
//   .then(checkStatusAndParse)
//   .then(printNames)
//   .catch((err) => {
//     console.log('SOMETHING WENT WRONG');
//     console.log(err);
//   })

// USING AXIOS
// Does not need to parse the response anymore, this would straight up give you the 
// Promise data right away.
axios.get('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10')
  .then((res) => {
    const { data, headers } = res
    console.log(data);
    console.log(headers.link.split(','))
  })
  // Same with catch, no need to check the status or the ok properties, everything
  // would be caught and an error would be thrown on catch.
  .catch((err) => {
    console.log('SOMETHING WENT WRONG!', err)
  })