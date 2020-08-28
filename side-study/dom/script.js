
// Adding styles to every LIs individually
// const allLIs = document.querySelectorAll('li');
// const colors = ['orange', 'green', 'purple'];

// allLIs.forEach((li, i) => {
//   li.style.color = colors[i]
// })


// Applying styled class to elements by adding, removing and toggling their class names.
// const todo = document.querySelector('.todo');
// todo.classList.add('done'); // adds .done as one of the element's classes
// todo.classList.remove('done'); // removes .done as one of the element's classes
// todo.classList.toggle('done'); // toggles .done as one of the element's classes


// creating a new Element then appending into the DOM
// const newImg = document.createElement('img'); // initializes a newly created element with empty fields and attributes.
// newImg.src = 'https://images.unsplash.com/photo-1497119146420-012f8fc80a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80';
// newImg.style.width = '200px';

// const body = document.querySelector('body');
// body.appendChild(newImg); // adds newImg as one of body's child in DOM as the last child of the parent element.

// Inserting/appending an element inside a parent element before a certain child element
// const parentUL = document.querySelector('ul');
// const firstLI = document.querySelector('.todo');
// const lastLI = document.querySelectorAll('li.todo')[2]
// const newLI = document.createElement('li');

// newLI.textContent = "I AM THE NEW CHILD";

// // parentUL.insertBefore(newLI, firstLI); // inserts before the first li
// parentUL.insertBefore(newLI, lastLI); // inserts before the last li



// Removing an element inside a parent element
// const ul = document.querySelector('section ul');
// const removeMe = ul.querySelector('.special');

// const removedElement = ul.removeChild(removeMe) // looks in the parent element to remove and return the child element.
// removeMe.remove(); // removes the element completely without the need to specify the parent.