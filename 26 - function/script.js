// const perimetro = new Function('lado', 'return lado * 4');

// function somar(n1, n2) {
//   return n1 + n2 + ' 2';
// }

// console.log(somar);

// function darOi(nome) {
//   console.log('Oi pra vc, ' + nome);
// }

// darOi.call({}, 'Fernando');

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['banana', 'uva', 'pera']

// carros.forEach.call(carros, (item) => {
//   console.log(item);
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   this.element.classList.add(classe);
// }
// const ul = new Dom('ul');

// console.log(ul)

const frutas = ['banana', 'uva', 'pera']


Array.prototype.pop.call(frutas)


const arrayLike = {
  0: 'item1',
  1: 'item2',
  2: 'item3',
  length: 3
}

const li = document.querySelectorAll('li')
const filtro = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo')
})

console.log(filtro)


const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
carro.acelerar(100, 20);
// Ford acelerou 100 em 20

const honda = {
  marca: 'Honda',
};
const acelerarHonda = carro.acelerar.bind(honda);
acelerarHonda(200, 10);
// Honda acelerou 200 em 10

console.log(acelerarHonda(100,7))

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

imc(1.80, 70); // 21.6
imc180(70); // 21.6

