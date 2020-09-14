/*
//  Identify the elements
let jump =
let mvRight =
let mvLeft =
let cat =
cat.style.left = '50px'
*/

//add event listeners & Functions

const jump = document.querySelector('#jump')
const right = document.querySelector('#right')
const left = document.querySelector('#left')
const cat = document.querySelector('#cat-pic')

// jump.addEventListener('click', hop(cat))
jump.addEventListener('click', () => {
  // const currPos = window.getComputedStyle(cat).top
  // cat.style.top = `${parseInt(currPos) / 2}px`
  // console.log('up')
  // setTimeout(() => cat.style.top = currPos, 200)
  // console.log('down')
  cat.classList.add('bounce')
  setTimeout(() => cat.classList.remove('bounce'), 1300)

})


right.addEventListener('click', () => {
  const currPos = parseInt(window.getComputedStyle(cat).left)
  cat.style.left = `${currPos + 15}px`
})

left.addEventListener('click', () => {
  const currPos = parseInt(window.getComputedStyle(cat).left)
  cat.style.left = `${currPos - 15}px`
})

document.addEventListener('keydown', (e) => {
  const currPos = parseInt(window.getComputedStyle(cat).left)
  if (e.key === " ") {
    cat.classList.add('bounce')
    setTimeout(() => cat.classList.remove('bounce'), 1300)
  }
  else if (e.key === 'ArrowRight') {
    cat.style.left = `${currPos + 15}px`
  }
  else if (e.key === 'ArrowLeft') {
    cat.style.left = `${currPos - 15}px`
  }
})
// Event functions

// function hop(el) {
//   const currPos = window.getComputedStyle(el).top
//   el.style.top = `${parseInt(currPos) / 2}px`
//   console.log('up')
//   setTimeout(() => el.style.top = currPos, 1000)
//   console.log('down')

// }