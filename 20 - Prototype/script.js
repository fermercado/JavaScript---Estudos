// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade + ' anos';
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome} tem ${this.idade}`;
};

const fernando = new Pessoa('Fernando', 'Mercado', 34);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // function
li.innerText; // String
li.value; //Number
li.hidden; // Bollean
li.offsetLeft; //Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // string
