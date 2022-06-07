// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let nome = {
  nome: 'Fernando',
  Sobrenome: 'Mercado',
};

// Crie um método no objeto anterior, que mostre o seu nome completo
nome.nomeCompleto = function () {
  return `${this.nome} ${this.Sobrenome}`;
};
console.log(nome.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 3000;

console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let dog = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latiu';
    } else {
      return 'nada';
    }
  },
};

console.log(dog.latir('homem'));
