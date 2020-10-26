function tulipValue(totalDays) {
  // Your code here
  let value = 1;
  let counter = 1;
  let combo = 0;
  for (let days = 0; days !== totalDays; days++) {
    if (!combo) {
      combo++;
      continue;
    }
    if (counter) {
      value++;
      counter--;
    } else {
      value--;
      combo++;
      counter = combo;
    }
  }
  return value;
}

console.log(tulipValue(20120504));
// Don't change this;;
// module.exports = {
//   tulipValue,
// };