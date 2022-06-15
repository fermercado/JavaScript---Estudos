// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade + ' anos';
  this.andar = function () {
    console.log(`${this.nome} andou`);
  };
}
const pessoa1 = new Pessoa('Fernando', 34);
pessoa1.andar();

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;
  this.addClass = function (classe) {
    elementList.forEach((item) => {
      item.classList.add(classe);
    });
    this.removeClass = function (classe) {
      elementList.forEach((item) => {
        item.classList.remove(classe);
      });
    };
  };
}

const listaItens = new Dom('li');
listaItens.addClass('teste');
listaItens.removeClass('teste');
