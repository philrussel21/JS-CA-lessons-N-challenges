function remove(items, callback) {
  // solution 1
  // const removed = items.filter(callback)
  // for (let el of removed) {
  //   const idx = items.indexOf(el)
  //   if (idx !== -1) items.splice(idx, 1)
  // }
  // return removed

  // solution 2
  const removed = [];
  for (let el of items) {
    if (callback(el)) {
      const idx = items.indexOf(el)
      removed.push(items.splice(idx, 1).join())
    }
  }
  return removed
}

function removerFunction(item) {
  // Your code goes here
  // Should return true if item begins with 't' and false otherwise
  return item[0] === 't' || item[0] === 'T'
}

let people = ["tanya", "sue", "john", "garret"];
let removed = remove(people, removerFunction);
console.log(people);
console.log(removed); 
