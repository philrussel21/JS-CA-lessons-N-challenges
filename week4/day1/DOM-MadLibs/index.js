/* create a function/fuctions that
- collects the form values
- appends the values to the list of Adjectives
- make sure that the adjective is clickable
- make sure the list of adjectives is updated when a word is
clicked on/ removed
*/

const form = document.querySelector('form').elements
const submit = form[1]
const words = document.querySelector('#words')
const dynamic = document.querySelector('#dynamic')

function myFunc(e) {
  e.preventDefault()

  // creates elements as containers for the new adj
  const li = document.createElement('li')
  li.style.cursor = 'pointer'
  const span = document.createElement('span')
  span.style.cursor = 'pointer'

  // creates an event listener for the newly created elements
  li.addEventListener('click', () => {
    words.removeChild(li)
    dynamic.removeChild(span)
  })
  span.addEventListener('click', () => {
    dynamic.removeChild(span)
    words.removeChild(li)

  })

  // extracts the values from the input
  const input = e.target["field1"]
  const newAdj = input.value

  // assigns the values from the input to the newly created elements
  li.textContent = newAdj
  span.textContent = ' ' + newAdj

  // appends the newly created element to their parent element to show
  // users
  words.appendChild(li)
  dynamic.appendChild(span)

  // clears the input field ready for new adjective
  input.value = ''
}
