// nth_fibonacci(0) should return 0
// nth_fibonacci(3) should return 2
// nth_fibonacci(6) should return 8

function nth_fibonacci(num) {
  let values = [0, 1];
  if (num < values.length) return console.log(values[num])

  let counter = 0;
  while (num + 1 !== values.length) {
    let new_val = values[counter] + values[counter + 1]
    values.push(new_val)
    counter++
  }
  return console.log(values[num])
}
