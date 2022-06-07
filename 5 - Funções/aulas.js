// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
  return !!dado;
}

console.log(isTruthy(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado(lado) {
  return lado * 4;
}
console.log(quadrado(2));

// Crie uma função que retorne o seu nome completo

// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `Nome completo => ${nome + sobrenome}`;
}
console.log(nomeCompleto('Fernando', ' Mercado'));

// Crie uma função que verifica se um número é par
function numPar(num) {
  let calc = num % 2;
  if (calc === 0) {
    return `E par`;
  } else {
    return ` E impar`;
  }
}

console.log(numPar(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
  return typeof dado;
}

console.log(tipoDado(5));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function () {
  console.log('Fernando Mercado');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
