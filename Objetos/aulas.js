let pessoa = {
  nome: 'Fernando',
  idade: '34',
};

console.log(pessoa.idade);

let quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

let menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
  metadeHeight() {
    return this.height / 2;
  },
};
menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function () {
  console.log('escondi');
};

let bg = menu.backgroundColor;
