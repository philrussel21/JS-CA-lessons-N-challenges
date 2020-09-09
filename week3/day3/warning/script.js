const btn = document.querySelector('#makeItRed');
btn.addEventListener('click', () => {
  const div = document.querySelector('#warning');
  div.style.backgroundColor = "red";
})