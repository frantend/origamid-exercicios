// EXERCÍCIOS

//1- Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

//2- Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="https"]');
console.log(imagem);

//3- Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');

// for(let i = 0; i < linksInternos.length; i+=1){
//   console.log(linksInternos[i]);
// } 

// ou usando forEach abaixo:

linksInternos.forEach(function(a){
  console.log(a);
});

//4- Selecione o primeiro h2 dentro de .animais-descricao
const animaisH2 = document.querySelector('.animais-descricao h2');
console.log(animaisH2);


//5- Selecione o último p do site
const ultimoParagrafo = document.querySelectorAll('p');
console.log(ultimoParagrafo[ultimoParagrafo.length-1]);


//6- Transformar array-like em Array real:
const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});

const arrayGrid = Array.from(gridSection);
console.log(arrayGrid);