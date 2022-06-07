// let ultimoItem = videoGames.pop();

// videoGames.push('3DS');

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// let j = 0;

// while (j < 5) {
//   console.log(j);
//   j++;
// }

let videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for (item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === 'PS4') {
    break;
  }
}

let frutas = ['banana', 'pera', 'maça', 'abacaxi', 'uva'];

frutas.forEach(function (item, index, array) {
  console.log(item, index, array);
});
