// const img = document.querySelector('img');
// function callback(event) {
//   console.log(event);
// }
// // img.addEventListener('click', callback);

// const listaAnimais = document.querySelector('.animais-lista');

// function callbackLista(event) {
//   console.log(event.currentTarget);
//   console.log(event.target);
//   console.log(event.type);
// }

// listaAnimais.addEventListener('click', callbackLista);

// const linkEx = document.querySelector('a[href^="http"]');
// function handleLinkEx(event) {
//   event.preventDefault();
//   console.log('clicou');
// }
// linkEx.addEventListener('click', handleLinkEx);

// const h1 = document.querySelector('h1');

// function handleEvent(event) {
//   console.log(event.type, event);
// }

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
function handleKeyboard(event) {
  if (event.key === 'f') {
    document.body.classList.toggle('fullscreen');
  }
  if (event.key === 'b') {
    document.body.classList.toggle('azul');
  }
}
window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((item) => {
  item.addEventListener('click', handleImg);
});
