let aNumber = 99;
let moreNumbers = [1, -10, 34, 720];
let aCalculatedNumber = 10 * 5;
let anObjectOfNumbers = { first: 1, second: 2, third: 3 };


function sumAll(...numbers) { // <--- You can edit this line
  let sum = 0;

  // Do NOT edit this loop. Sorry! ;) 
  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(sumAll(aNumber)); // <--- You can edit this line


