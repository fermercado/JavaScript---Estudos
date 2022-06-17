// const frase = 'A melhor comida';

// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(frase.length - 1));
const frase = 'A melhor linguagem é';
const linguagem = ' JavaScript';

const fraseFinal = frase.concat(linguagem);

console.log(fraseFinal);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta)); // true
console.log(fruta.includes(listaFrutas)); // false

listaFrutas.forEach((x) => {
  const nova = fruta.find((y) => x === y);
  if (nova) {
    console.log(nova);
  }
});
