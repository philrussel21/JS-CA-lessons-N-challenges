
const colours = ['red', 'green', 'blue', 'orange', 'black', 'magenta', 'purple'];
const container = document.querySelector('#container');

const changeColour = function () {
  const h1 = document.querySelector('h1');
  // REMEMBER: In this usage, THIS keyword represents the object that it was called
  // upon with .addEventListener. In this case, the call is down below on the box object
  // hence THIS has the value of the box object.
  h1.style.color = this.style.backgroundColor;
}


for (let colour of colours) {
  const box = document.createElement('div');
  box.style.backgroundColor = colour;
  box.classList.add('box');
  container.append(box);
  // THIS IS CALLED HERE
  box.addEventListener('click', changeColour)
}