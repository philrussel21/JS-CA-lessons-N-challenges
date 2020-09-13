function positiveDominant(array) {
  // Your code here
  let pos = 0;
  let neg = 0;
  dupesRemoved = new Set(array)
  dupesRemoved.forEach(num => {
    num > 0 ? pos++ : neg++
  })
  return pos > neg
}