// 1 - Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log('Exercicio 1:')
  console.log(cor, marca, portas);
}

// 2 - Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}

console.log(`Exercicio 2A: ${somarDois(4)}`);
console.log(`Exercicio 2B: ${dividirDois(6)}`);

// 3 - O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  // console.log(numero);
}

const total = 10 * numero;
console.log(`Exercicio 3: ${total}`);
