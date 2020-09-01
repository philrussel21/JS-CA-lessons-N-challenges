// TODO
const numbers = [1, 2, 3, 4, 5];

Array.prototype.square = function () {
  return this.map(el => el * el)
}

Array.prototype.cube = function () {
  return this.map(el => el ** 3)
}

Array.prototype.average = function () {
  return (this.length === 0) ? NaN : this.reduce((accum, val) => accum + val) / this.length
}

Array.prototype.sum = function () {
  return this.reduce((accum, val) => accum + val)
}

Array.prototype.even = function () {
  return this.filter(el => el % 2 === 0)
}

Array.prototype.odd = function () {
  return this.filter(el => el % 2 === 1)
}

console.log(numbers.square());
// must return [1, 4, 9, 16, 25]
console.log(numbers.cube());
// must return [1, 8, 27, 64, 125]
console.log(numbers.average());
// must return 3
console.log(numbers.sum());
// must return 15
console.log(numbers.even());
// must return [2, 4]
console.log(numbers.odd());
// must return [1, 3, 5]
