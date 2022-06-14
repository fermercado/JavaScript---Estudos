// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const novoMenu = menu.cloneNode(true);

copy.appendChild(novoMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiraDt = faq.querySelector('dt');
console.log(primeiraDt);

// Selecione o DD referente ao primeiro DT
const proximodd = primeiraDt.nextElementSibling;
console.log(proximodd);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
