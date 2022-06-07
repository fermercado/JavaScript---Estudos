function areaQuadrada(lado) {
  return lado * lado;
}
console.log(areaQuadrada(2));

function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(pi());

function imc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}
console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Eu gosto do ceu';
  } else if (cor === 'verde') {
    return ' eu gosto de mato';
  } else {
    return 'Eu nao gosto de cores';
  }
}

console.log(corFavorita('azul'));

addEventListener('click', function () {
  console.log('oi');
});

function imc2(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}
console.log(imc2(80, 1.8));

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(50));

let totalPaises = 193;
function faltaVisitar(paisesQueVisitei) {
  return `Faltam visitar ${totalPaises - paisesQueVisitei} paises`;
}

console.log(faltaVisitar(10));

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro
