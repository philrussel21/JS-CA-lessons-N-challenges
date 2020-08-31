// const btn = document.querySelector('#clicker');

// btn.onclick = function () {
//   alert('Hola!');
// } //frowned upon method of adding function to onEvent property one at a time

// addEventListener approach allows multiple callbacks to run on a specified event when that event happened to
// the called upon object without overwriting the previous callback.

// btn.addEventListener('click', () => alert('Clicked!'));
// btn.addEventListener('click', () => console.log('Second thing!'))

// btn.addEventListener('mouseover', function () {
//   btn.textContent = 'Stop hovering!'
// })
// btn.addEventListener('mouseout', function () {
//   btn.textContent = 'Click me too!'
// })

const btn = document.querySelector('#chaser')
btn.addEventListener('mouseover', () => {
  const magicXNum = Math.floor(Math.random() * window.innerWidth);
  const magicYNum = Math.floor(Math.random() * window.innerHeight);
  btn.style.left = `${magicXNum}px`;
  btn.style.top = `${magicYNum}px`;
})

btn.addEventListener('click', () => {
  btn.textContent = "Okay, You got me!"
  document.body.style.backgroundColor = 'limegreen'
})

btn.addEventListener('mouseout', () => {
  btn.textContent = "Catch me if you can!"
})