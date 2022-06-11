const img = document.querySelectorAll('img');
let i = 0;
img.forEach((item, index, array) => {
  console.log(item, index, array);
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});
