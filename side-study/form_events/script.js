const form = document.querySelector('#signup');
const creditCard = document.querySelector('#cc');
const checkBox = document.querySelector('#terms');
const fruitSelect = document.querySelector('#fruits');

// form.addEventListener('submit', function (e) {
//   console.log(e);
//   console.log()
//   // prevents default behaviour of an element, in this case:
//   // Prevents form from submission on 'submit'
//   e.preventDefault();
// })

// Input listener - listens to when the input is being changed and is updating
// continously
// const formData = {};
// creditCard.addEventListener('input', (e) => {
//   console.log('cc changed!', e)
//   // target method is returning the object as to where the even is being called
//   // in this case, it is being called to the creditCard object (text input) and
//   // then extracted the value to be then stored to formData
//   formData.cc = e.target.value;
// })

// fruitSelect.addEventListener('input', (e) => {
//   console.log('select changed!', e)
//   formData.fruit = e.target.value;
// })

// checkBox.addEventListener('input', (e) => {
//   console.log('checkbox toggled!', e)
//   formData.isChecked = e.target.checked
// })

// DRYER Version

// const formData = {};

// for (let input of [creditCard, checkBox, fruitSelect]) {
//   input.addEventListener('input', ({ target }) => {
//     const { name, value, checked, type } = target;
//     formData[name] = type === 'checkbox' ? checked : value;
//   })
// }



// Change Event - same with 'input' listener except with input type=text.
// triggers when the textbox has been unfocused, unclicked or Enter has been hit.

const formData = {};

for (let input of [creditCard, checkBox, fruitSelect]) {
  input.addEventListener('change', ({ target }) => {
    const { name, value, checked, type } = target;
    formData[name] = type === 'checkbox' ? checked : value;
    console.log('event!')
  })
}