function greetEachPerson() {
  // Convert our varying-amount of arguments into a single array.
  // Note that "arguments" is a special almost-Array object built into all JS functions.
  // Note that we use "new Array(null, ...arguments)" instead of "new Array(...arguments)"
  // This is because if you did something like "calculateSum(10)" without using null,
  // the array constructor treats the number as a desired length for the array rather than a value to put in the array.
  let tempArgs = new Array(null, ...arguments);

  // In newer JS versions (and in browsers), we can just say 
  // let flattenedArray = tempArgs.flat(Infinity)
  // But I (Alex H) am writing in Node 10. It doesn't have that. 
  // We can write this helper function though:
  const flatten = function (arr, result = []) {
    for (let i = 0, length = arr.length; i < length; i++) {
      const value = arr[i];
      if (Array.isArray(value)) {
        flatten(value, result); // Note the recursion for multi-level arrays of unknown & varying depth.
      } else {
        result.push(value);
      }
    }
    return result;
  };
  // And then call our helper here:
  let flattenedArgs = flatten(tempArgs);

  if (flattenedArgs.length <= 0) {
    throw ("There's no one to greet!");
  }

  let greetingsToReturn = [];
  for (let index = 0; index < flattenedArgs.length; index++) {
    const element = flattenedArgs[index];
    // Check that the current element is a string
    if (Object.prototype.toString.call(element) === "[object String]") {
      // Check that the string is not empty/whitespace
      if (!!element) {
        // Check that the string does not have numbers or special characters
        if (/^[a-zA-Z]+$/.test(element)) {
          // Build up our greeting array
          greetingsToReturn.push(`Hello there, ${element}!`)
        }

      }
    }
  }

  if (greetingsToReturn.length <= 0) {
    throw ("Please provide valid names to greet!");
  }

  return greetingsToReturn;
}

// Example usage:
// let greetingArray = greetEachPerson("Alex", 9, ["Carl", 42, ["Zeb", "Nandini", [ "Jairo", "Varsha", 100]]], "", "Lav", new Object(), "99", "$dollar bills yo");
// console.table(greetingArray);

// Equivalent to:
// console.table(greetEachPerson("Alex", 9, ["Carl", 42, ["Zeb", "Nandini", [ "Jairo", "Varsha", 100]]], "", "Lav", new Object(), "99", "$dollar bills yo"))

module.exports = {
  greetEachPerson
}