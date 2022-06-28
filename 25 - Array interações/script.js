// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const curso = document.querySelectorAll('.curso');
const arrayCurso = Array.from(curso);

const newArray = arrayCurso.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descr = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo: titulo,
    descricao: descr,
    aulas: aulas,
    horas: horas,
  };
});
console.log(newArray);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const newNum = numeros.filter((item) => item > 100);
console.log(newNum);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const newInstrumento = instrumentos.some(
  (instrumento) => instrumento === 'Baixo',
);

console.log(newInstrumento);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99',
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99',
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49',
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35',
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60',
  },
];

const totalCompras = compras.reduce((acc, item) => {
  const precoLimpo = +item.preco.replace('R$', '').replace(',', '.');

  return acc + precoLimpo;
}, 0);

console.log(totalCompras);
// let soma = 0;
// const newCompras = compras.map((item) => {
//   const newValue = +item.preco.replace('R$', '').replace(',', '.');

//   soma += newValue;
// });

// console.log('total compras =>', soma);
