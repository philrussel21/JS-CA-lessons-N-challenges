const col = document.querySelector('#color');
const theorySelect = document.querySelector('#theorySelect')
const section = document.querySelector('.cont')
const hexColourIn = document.querySelector('#hexColour')
const rgbColourIn = document.querySelector('#rgbColour')
const hslColourIn = document.querySelector('#hslColour')


col.addEventListener('input', () => {
  const hexColor = col.value
  const { r, g, b } = hexToRgb(hexColor)
  const { h, s, l } = rgb2hue(r, g, b)
  hexColourIn.value = hexColor.toUpperCase()
  rgbColourIn.value = `rgb(${r}, ${g}, ${b})`
  hslColourIn.value = `hsl(${h}, ${s}%, ${l}%)`

  if (theorySelect.value === 'com') {
    const div = section.querySelector('div');
    const computedCompHue = computeComplementary(h)
    // changes the bgcolor of the div to the computed hsl colour
    div.style.backgroundColor = `hsl(${computedCompHue}, ${s}%, ${l}%)`
  }

})

theorySelect.addEventListener('input', (e) => {
  if (e.target.value == 'com') {
    if (section.children.length === 2) {
      section.removeChild(section.lastElementChild)
    }
  }
  else {
    appendDivs(createDiv(1))
    // Fires off the event to change the bg color?
  }
})

function computeComplementary(hue) {
  return (hue + 180) % 360
}


function createDiv(num) {
  const divs = [];
  for (let i = 0; i < num; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('w-100', 'h-100')
    divs.push(newDiv)
  }
  return divs
}

function appendDivs(arr) {
  const section = document.querySelector('.cont')
  for (let div of arr) {
    section.appendChild(div)
  }
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


function rgb2hue(r, g, b) {
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