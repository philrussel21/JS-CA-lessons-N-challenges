const btn = document.querySelector('button');

// Callbacks: Callback Hell
// setTimeout(() => {
//   btn.style.transform = 'translateX(100px)';
//   setTimeout(() => {
//     btn.style.transform = 'translateX(200px)';
//     setTimeout(() => {
//       btn.style.transform = 'translateX(300px)';
//       setTimeout(() => {
//         btn.style.transform = 'translateX(400px)';
//         setTimeout(() => {
//           btn.style.transform = 'translateX(500px)';
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000)

// Promises
// const introPromise = new Promise((resolve, reject) => {
//   const randNum = Math.random()
//   if (randNum > 0.5) {
//     resolve();
//   }
//   else {
//     reject();
//   }
// });

// Promises that takes some time to be resolved or rejected
// const introPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randNum = Math.random()
//     if (randNum > 0.5) {
//       resolve();
//     }
//     else {
//       reject();
//     }
//   }, 5000)
// });


// handling resolved promises with then
// introPromise.then(() => console.log('Promise resolved. :)'))

// catching rejected promises with catch
// introPromise.catch(() => console.log('Promise rejected. :('))


// function that returns a Promise - usually done like this
const introPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randNum = Math.random()
      if (randNum > 0.5) {
        resolve();
      }
      else {
        reject();
      }
    }, 5000)
  })
}

// then and catch can be chained together and only one of them would run depending on the returned status of the Promise
introPromise()
  .then(() => console.log('Resolved :)'))
  .catch(() => console.log('Rejected :('));