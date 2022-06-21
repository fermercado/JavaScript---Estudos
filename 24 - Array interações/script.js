// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach(function (item, index, array) {
//   console.log(item.toUpperCase());
// });

// // com Arrow Function
// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase());
// });

// const li = document.querySelectorAll('li');

// li.forEach((i) => i.classList.add('ativa'));

// li.forEach(function (item) {
//   item.classList.add('ativa');
// });

// const carros = ['Ford', 'Fiat', 'Honda'];
// const newCarros = carros.map((item) => {
//   return 'Carro ' + item;
// });

// carros; // ['Ford', 'Fiat', 'Honda']
// newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];

// const numeros = [2, 4, 6, 8, 10, 12, 14];
// const numerosX3 = numeros.map((n) => n * 3);

// numerosX3; // [6, 12, 18, 24, 30, 36, 42];

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15,
//   },
//   {
//     nome: 'HTML 2',
//     min: 10,
//   },
//   {
//     nome: 'CSS 1',
//     min: 20,
//   },
//   {
//     nome: 'JS 1',
//     min: 25,
//   },
// ];
// let soma = 0;
// const tempoAula = aulas.map((aula) => aula.min);

// function nomeAulas(aula) {
//   return aula.nome;
// }

// const arrayAula = aulas.map(nomeAulas);
// console.log(arrayAula);

// console.log(tempoAula);

const aulas = [10, 25, 30];
const total1 = aulas.reduce((acumulador, atual) => {
  return acumulador + atual;
}, 0);
console.log(total1);

const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2; // 165

const frutas = ['Banana', 'Perâ', 'Uva'];

const temUva = frutas.some((item) => {
  return item === 'Uva';
});

const every = frutas.every((fruta) => {
  return fruta;
});

console.log(every);

const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every((x) => x > 3); // true

console.log(maiorQue3);

const buscaUva = frutas.findIndex((fruta) => {
  return fruta === 'Uva';
}); // 2

console.log(buscaUva);

const buscaMaior45 = numeros.find((x) => x > 45); // 88

console.log(buscaMaior45);

const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas2.filter((fruta) => {
  return fruta;
}); // ['Banana', 'Uva', 'Maçã']

console.log(arrayLimpa);

const buscaMaior = numeros.filter((x) => x > 45); // [88, 101]

console.log(buscaMaior);

const aulas2 = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];

const maior15 = aulas2.filter((aula) => {
  return aula.min >= 15;
});

console.log(maior15);
