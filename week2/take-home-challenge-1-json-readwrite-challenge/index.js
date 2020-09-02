const fs = require('fs');
// const updatedFighters = 0;
//Your Code Here
let data = fs.readFileSync('./fighters.json');
const fightersData = JSON.parse(data);
const [...updatedFighters] = fightersData.fighters
// updatedFighters.sort((a, b) => b.powerLevel - a.powerLevel);
updatedFighters.pop()
fs.writeFileSync('./updatedFighters.json', JSON.stringify(updatedFighters));

console.log(fightersData.fighters);

module.exports = {
    updatedFighters
};
