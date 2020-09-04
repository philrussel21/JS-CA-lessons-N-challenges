
// Making a request with the XMLHttpRequest object.
const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function () {
  console.log('WORKED!')
  const data = JSON.parse(this.responseText);
  // Unpacks the setup and punchline property from the array of object inside data
  for (let { setup, punchline } of data) {
    console.log(setup);
    console.log(punchline);
    console.log("Baduum tssss")
  }
});
firstReq.addEventListener('error', () => {
  console.log('ERROR!')
});
firstReq.open('GET', 'https://official-joke-api.appspot.com/random_ten');
firstReq.send();
console.log('Waiting for response');