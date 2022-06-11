const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('teste');
menu.classList.toggle('teste');

if (menu.classList.contains('teste')) {
  menu.classList.add('Contem-Teste');
} else {
  menu.classList.add('nao-contem-teste');
}

menu.className += ' Vermelho';
console.log(menu.className);

const animais = document.querySelector('.animais');
console.log(animais.attributes);

const img = document.querySelector('img');
const srcImg = img.getAttribute('alt');
img.setAttribute('alt', 'É uma raposa');

const possuiAlt = img.hasAttribute('tittle');

console.log(possuiAlt);
