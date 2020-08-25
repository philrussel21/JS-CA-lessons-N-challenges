/*
 taking the below variable, destructure the nested heroes and assign their
 heros to their respective variables.
*/
let heros = { marvel: { ironman: "New York", thor: "Asgard" }, dc: { batman: "Gotham", superman: "Krypton" } };

let { marvel: { ironman } } = heros
let { marvel: { thor } } = heros
let { dc: { batman } } = heros
let { dc: { superman } } = heros

/* 
Use destructuring and the Rest operator to assign the marvel villains(Thanos and
Venom) into their separate variables, and place the DC villains(Bane, The Riddler) into 
a variable called others.
*/
let villains = ["Thanos", "Venom", "Bane", "The Riddler"]
let [Thanos, Venom, ...others] = villains
/*
Because there are always more villains, as a final check... 
combine the 2 arrays using the spread operators
*/
let villains2 = ["Green Goblin", "King Cobra", "Kingpin"]

let combinedArr = [...villains, ...villains2]
