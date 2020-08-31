const input = document.querySelector('#username');

input.addEventListener('keydown', function (e) {
  console.log('KEY DOWN!')
})

input.addEventListener('keyup', function (e) {
  console.log('KEY UP!')
})

input.addEventListener('keypress', function (e) {
  console.log(e.key)
})

const todoInput = document.querySelector('#addItem');
const ul = document.querySelector('#items');

todoInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const newToDo = document.createElement('li');
    newToDo.textContent = this.value;
    ul.append(newToDo);
    this.value = '';
  }
})

