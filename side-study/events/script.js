const btn = document.querySelector('#clicker');

// btn.onclick = function () {
//   alert('Hola!');
// } //frowned upon method of adding function to onEvent property one at a time

// addEventListener approach allows multiple callbacks to run on a specified event when that event happened to
// the called upon object without overwriting the previous callback.

btn.addEventListener('click', () => alert('Clicked!'));
btn.addEventListener('click', () => console.log('Second thing!'))

btn.addEventListener('mouseover', function () {
  btn.textContent = 'Stop hovering!'
})
btn.addEventListener('mouseout', function () {
  btn.textContent = 'Click me too!'
})

