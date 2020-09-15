const col = document.querySelector('#color');
const theorySelect = document.querySelector('#theorySelect')
const section = document.querySelector('.cont')
const hexColourIn = document.querySelector('#hexColour')
const rgbColourIn = document.querySelector('#rgbColour')
const hslColourIn = document.querySelector('#hslColour')
const baseDiv = document.querySelector('#base')
const secDiv = section.querySelector('#secDiv')

const thirdDiv = document.createElement('div')
thirdDiv.classList.add('w-100', 'h-100')
thirdDiv.setAttribute('id', 'thirdDiv')

window.onload = function () {
  color.value = '#007FFF'
  // Fires off the event to apply the colour theory on default
  changeBgColor()
}

col.addEventListener('input', changeBgColor)

theorySelect.addEventListener('input', (e) => {
  if (e.target.value == 'com') {
    if (section.children.length === 3) {
      section.removeChild(section.lastElementChild)
    }
    // Fires off the event to apply the colour theory
    changeBgColor()
  }
  else {
    section.appendChild(thirdDiv)
    changeBgColor()
    // Fires off the event to apply the colour theory
  }
})

function changeBgColor() {
  // converts to different color definitions
  const hexColor = col.value
  const { r, g, b } = hexToRgb(hexColor)
  const { h, s, l } = rgb2hsl(r, g, b)

  // fills the input text with converted values
  hexColourIn.value = hexColor.toUpperCase()
  rgbColourIn.value = `rgb(${r}, ${g}, ${b})`
  hslColourIn.value = `hsl(${h}, ${s}%, ${l}%)`

  // if Complementary Theory
  if (theorySelect.value === 'com') {
    baseDiv.style.backgroundColor = hexColor;

    // clears existing headings
    clearHeadings()
    // adds new heading to the baseColor div
    baseDiv.appendChild(addsBaseHeading())
    shouldUseWhiteFont(baseDiv)

    const computedCompHue = computeComplementary(h)
    // changes the bgcolor of the div to the computed hsl colour
    secDiv.style.backgroundColor = `hsl(${computedCompHue}, ${s}%, ${l}%)`
    // adds heading to the secondary div
    secDiv.appendChild(addsCompHeading())
    shouldUseWhiteFont(secDiv)

  }
  // Analogous Theory
  else {

    // the secDiv becomes the baseDiv to put the base colour in the middle of the page
    secDiv.style.backgroundColor = hexColor;

    // clears existing headings
    clearHeadings()
    // adds new heading to highlight the baseColour div
    secDiv.appendChild(addsBaseHeading())
    shouldUseWhiteFont(secDiv)

    // computes the analogous values according to basecolour the assigns to appropriate divs
    const { first, second } = computeAnalogous(h)

    baseDiv.style.backgroundColor = `hsl(${first}, ${s}%, ${l}%)`
    baseDiv.appendChild(addsAnHeading())
    shouldUseWhiteFont(baseDiv)


    thirdDiv.style.backgroundColor = `hsl(${second}, ${s}%, ${l}%)`
    thirdDiv.appendChild(addsAnHeading())
    shouldUseWhiteFont(thirdDiv)
  }

}

// algo to find the optimum colour of heading to maximise contrast
function shouldUseWhiteFont(element) {
  // element.style.backgroundColor returns a string in rgb format then r,g,b are extracted
  const rgbArr = extractRGBfromString(element.style.backgroundColor)
  const [, r, g, b] = rgbArr
  const isWhite = (r * 0.299 + g * 0.587 + b * 0.114) < 186
  isWhite ? element.style.color = "white" : element.style.color = "#333333"
}

function clearHeadings() {
  baseDiv.innerHTML = ""
  secDiv.innerHTML = ""
  thirdDiv.innerHTML = ""
}

function addsBaseHeading() {
  const h2 = document.createElement('h2')
  h2.textContent = "Base Colour"
  return h2
}

function addsCompHeading() {
  const h2 = document.createElement('h2')
  h2.textContent = "Complementary Colour"
  return h2
}

function addsAnHeading() {
  const h2 = document.createElement('h2')
  h2.textContent = "Analogous Colour"
  return h2
}

// returns an array with rgb,r,g,b as values
function extractRGBfromString(rgb) {
  var matchColors = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
  var match = matchColors.exec(rgb);
  return match
}


// COLOR THEORIES ALGO

function computeComplementary(hue) {
  return (hue + 180) % 360
}

function computeAnalogous(hue) {
  return { first: (hue + 30) % 360, second: ((hue - 30) + 360) % 360 }
}


// COLOR CONVERSION ALGOS
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


function rgb2hsl(r, g, b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;
  if (delta == 0) h = 0;
  else if (cmax == r)
    // Red is max
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    // Green is max
    h = (b - r) / delta + 2;
  else
    // Blue is max
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;
  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return { h, s, l }
}