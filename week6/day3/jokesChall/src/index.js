const jokesArray = [
  "What is a pirate's favourite programming language? The C!",
  "What is a pirate's favourite programming language? R!",
  "How do you know if a developer knows TypeScript? Don't worry, they'll tell you at every opportunity.",
  "I'd tell you a joke about C#, but I have to compile it first!",
  "I'd tell you a joke about JavaScript, but I don't know if you can interpret it!",
  "Hey, did you get that UDP networking joke I sent you yesterday? It's okay, I don't care if you get it or not."
];

function returnRandomJokes(quantityToReturn = 1) {
  if (typeof quantityToReturn !== 'number') {
    throw ("Whoops! returnRandomJokes needs to be given a number or nothing at all!")
  }
  if (Number.isNaN(quantityToReturn) || quantityToReturn != Math.trunc(quantityToReturn)) {
    throw ("Woops! returnRandomJokes needs to be given a whole number or nothing at all!")
  }
  if (quantityToReturn == 1) {
    return jokesArray[Math.floor(Math.random() * jokesArray.length)]
  } else {
    let jokesToReturn = [];
    for (let index = 0; index < quantityToReturn; index++) {
      jokesToReturn.push(returnRandomJokes());
    }
    return jokesToReturn;
  }
}


// Example usage:
// console.log(`Today's super awesome IT joke is: \n${returnRandomJokes()}`)
// console.log(returnRandomJokes(3.50));
// console.table(returnRandomJokes('3'));

module.exports = {
  jokesArray,
  returnRandomJokes
}