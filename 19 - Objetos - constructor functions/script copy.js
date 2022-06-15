function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);

const fiat = new Carro('Fiat', 2500);

function Carro2(marcaAtribuida, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marcaAtribuida;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);

// const Dom = {
//   seletor: 'li',
//   element() {
//     const elementoSelecionado = document.querySelector(this.seletor);
//     return elementoSelecionado;
//   },
//   ativar() {
//     this.element().classList.add('ativo');
//   },
// };

// Dom.seletor = 'ul';
function Dom(seletor) {
  this.seletor = seletor;

  (this.element = function () {
    const elementoSelecionado = document.querySelector(this.seletor);
    return elementoSelecionado;
  }),
    (this.ativar = function (classe) {
      this.element().classList.add(classe);
    });
}

const li = new Dom('li');
const liLast = new Dom('li:last-child');
const ul = new Dom('ul');
ul.ativar('ativo');
liLast.ativar('agoravai');
