// var x = 5;
// var y = 10;
// x += y; // x = x + y (15)
// x -= y; // x = x - y (-5)
// x *= y; // x = x * y (50)
// x /= y; // x = x / y (0.5)
// x %= y; // x = x % y (0)
// x **= y; // x = x ** y (9765625)

let numero = 20;
let numero2 = 10;

numero += numero2;

console.log(numero);

let idade = 18;
let naoPossuidiabetes = true;

let podeBeber;

podeBeber = idade >= 18 && naoPossuidiabetes ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);

let possuiFaculdade = true;

if (possuiFaculdade) console.log('Sim Possui');
