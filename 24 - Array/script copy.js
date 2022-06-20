// const carros = new Array('ford', 'fiat', 'honda');

// carros[2] = 'ferrari';
// carros[3] = 'kia';

// console.log(carros.length);

// const li = document.querySelectorAll('li');

// const obj = {
//   0: 'Fernando',
//   1: 'Camila',
//   2: 'Francisco',
//   length: 3,
// };

// const arrayLi = Array.from(obj);

// console.log(li);
// console.log(arrayLi);

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

// console.log(frutas[2][0].length);

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];

// instrumentos.sort();

// const idades = [32, 21, 33, 43, 1, 12, 8];

// idades.sort();

// console.log(instrumentos);
// console.log(idades);

const carros = ['Ford', 'Fiat', 'VW'];

carros.unshift('kia', 'ferrari');
carros.push('parati', 'gol');

// console.log(carros.pop());
// console.log(carros.shift());
// console.log(carros);
console.log(carros.splice(2, 2, 'Fusca'));
console.log(carros);

// console.log(carros.reverse());

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 2));

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];

console.log(transporte1.concat(transporte2));

const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();
