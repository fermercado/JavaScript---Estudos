// const h1 = document.querySelector('h1');

// h1.outerHTML; // todo o html do elemento
// h1.innerHTML; // html interno
// h1.innerText; // texto, sem tags

// // h1.innerText = '<p>Texto</p>'; // a tag vai como texto
// // h1.innerHTML = '<p>Texto</p>'; // a tag é renderizada

// const lista = document.querySelector('.animais-lista ');
// console.log(lista.parentElement.parentElement);
// console.log(lista.nextElementSibling);
// console.log(lista.previousElementSibling);

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; // último filho

// console.log(lista.childNodes);
// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const mapa = document.querySelector('.mapa');

// contato.insertBefore(animais, titulo);

// contato.replaceChild(lista, titulo);
// // contato.removeChild(titulo);

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo titulo';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

// console.log(novoh1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneh1 = h1.cloneNode(true);

faq.appendChild(cloneh1);
