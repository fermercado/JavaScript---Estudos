const h1 = document.querySelector('h1');

function callbackh1() {
  console.log('clicou em ', h1.innerText);
}
h1.addEventListener('click', callbackh1);
