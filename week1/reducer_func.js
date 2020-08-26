/*
Taking the below Array & the learning from the lesson you need to:
 - flatten it,
 - find the average
 */

arr = [[28, 50, 33], [23, 33, 55, 70], [1]]

const flattenedArr = arr.reduce((accum, value) => [...accum, ...value], [])
const averagedArr = flattenedArr.reduce((accum, value, i, arr) => {
  accum += value;
  return i === arr.length - 1 ? accum / arr.length : accum
})
console.log(averagedArr)
