// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);

console.log(aleatorio);

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
let newNum = numeros.split(', ');
const numeroMaximo = Math.max(...newNum);

console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

let soma = 0;

listaPrecos.forEach((item) => {
  let newList = +item
    .toLocaleUpperCase()
    .replace('R$', '')
    .trim()
    .replace(',', '.');

  newList = +newList.toFixed(2);
  soma = soma + newList;
});

console.log(
  soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
);
