const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n2 + ' 2';
}

console.log(somar);

function darOi(nome) {
  console.log('Oi pra vc, ' + nome);
}

darOi.call({}, 'Fernando');

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['banana', 'uva', 'pera'];

carros.forEach.call(carros, (item) => {
  console.log(item);
});

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};
const ul = new Dom('ul');

console.log(ul);
