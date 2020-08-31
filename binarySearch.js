function binarySearch(binaryArray, searchValue) {
  // Your code here
  let startIndex = 0;
  let endIndex = binaryArray.length
  let counter = 0
  while (startIndex <= endIndex) {
    let arrLength = (startIndex + endIndex)
    let middleIndex = (arrLength % 2 === 0) ? Math.ceil(arrLength / 2) : Math.floor(arrLength / 2)
    counter += 1

    if (searchValue === binaryArray[middleIndex]) {
      return [middleIndex, counter]
    }
    else if (searchValue < binaryArray[middleIndex]) {
      endIndex = middleIndex - 1
    }
    else {
      startIndex = middleIndex + 1
    }

  }
}

console.log(binarySearch([1, 3, 7, 10, 14, 19, 31], 10))