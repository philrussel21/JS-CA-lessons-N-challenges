let startingObject = {
  name: "Alex",
  age: 24,
  favourites: {
    game: "Super Smash Bros. Ultimate",
    drink: "Orange Vanilla Coca Cola",
    food: "Chocolate Orange Honeycomb",
    activity: "Playing videogames",
    programmingLanguage: "C#"
  },
  location: "NSW",
  coworkers: ["Nandini", "Carl", "Jairo"]
}

// Step 01.
//	Modify the code below so that it 
//	accesses the favourite game from the startingObject.
console.log(`Alex's favourite game is ${startingObject.favourites.game}`);


// Step 02.
//	Add the missing coworkers to 
//	the "coworkers" property on startingObject.
startingObject.coworkers.push('Zeb')
console.log(startingObject.coworkers)


// Step 03.
//	Delete the age property from startingObject.
delete startingObject.age
console.log(startingObject.age)




module.exports = {
  startingObject

}