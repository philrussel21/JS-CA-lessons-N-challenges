const multipleArguments = (...args) => {
  if (args.length === 0) return 0;
  return args.reduce((accum, value) => accum *= value)
}

console.log(multipleArguments(1, 2, 3, 4, 5, 6, 7))
