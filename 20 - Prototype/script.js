function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return this.nome + ' Abraçou';
  };
  this.andar = function () {
    return 'Andou pelo objeto';
  };
}

Pessoa.prototype.andar = function () {
  return this.nome + ' Andou';
};
Pessoa.prototype.nadar = function () {
  return this.nome + ' nadou';
};
Pessoa.prototype.andar = function () {
  return this.nome + ' Andou';
};

let fernando = new Pessoa('Fernando', 34);

console.log(Pessoa.prototype);
console.log(fernando);

const pais = 'Brasil';
const cidade = new String('Rio');

console.log(cidade);

const listaAnimais = ['cachorro', 'gato', 'cavalo'];

const lista = document.querySelectorAll('li');
const novoArray = Array.prototype.slice.call(lista);
const outroArray = Array.from(lista);
console.log(outroArray);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  anda() {
    return 'Andou';
  },
};
