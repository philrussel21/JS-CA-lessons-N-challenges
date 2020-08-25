
function toVaporwave(string) {
  return string.split('').map(x => x.trim()).join(' ');
}


console.log(toVaporwave('Hello World!'))
