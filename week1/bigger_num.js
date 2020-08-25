function largest_number(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return console.log('Make sure both inputs are numbers')
  }

  if (num1 === num2) {
    console.log('Numbers are Equal')
  } else {
    console.log(Math.max(num1, num2))
  }
}