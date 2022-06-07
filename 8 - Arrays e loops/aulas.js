// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
let ano = [1959, 1962, 1970, 1994, 2002];
for (i = 0; i < ano.length; i++) {
  console.log(`O Brasil ganhou a copa de ${ano[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (let j = 0; j < frutas.length; j++) {
  console.log(frutas[j]);
  if (frutas[j] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,

let ultimaFruta = frutas[frutas.length - 1];

console.log(ultimaFruta);

// sem remover a mesma da array.
