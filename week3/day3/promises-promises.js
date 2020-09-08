function printResult(result) {
  console.log(result);
}

function sendResult(theResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(theResult), 1000);
  })
}

// resolved value will be passed to printResult as an argument which is then
// logged onto the console.
sendResult("winner").then(printResult);