const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(height, animaisTop);

const raposah2 = document.querySelector('h2');
const primeiroh2 = raposah2.offsetLeft;
const rect = raposah2.getBoundingClientRect();
console.log(rect);

if (rect.top < 0) {
  console.log('pasosou do elemento');
}

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset,
);

const small = window.matchMedia('(max-width: 600px)').matches;
if (small) {
  console.log('usuario mobile');
} else {
  console.log('Usuário desktop');
}
