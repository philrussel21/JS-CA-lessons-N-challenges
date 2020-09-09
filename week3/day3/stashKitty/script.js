function addStash(event) {
  const posX = event.clientX;
  const posY = event.clientY;
  console.log(event)

  const stache = document.querySelector('#stash-pic');
  stache.style.left = `${posX - 96}px`
  stache.style.top = `${posY}px`
  console.log({ posX, posY })
}

// Add an event listener to the correct DOM node here - using your addStash function, and firing on click.
const img = document.querySelector('#cat-pic')
img.addEventListener('click', addStash)