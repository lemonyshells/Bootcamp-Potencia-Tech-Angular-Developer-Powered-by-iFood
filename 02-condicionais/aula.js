// variavel de verdadeiro ou falso = boolean

const camisetaAzul = true;
const camisetaVerde = false;

// condicional é quando tentamos verificar se uma disposicao é verdadeira ou falso


const numero = 7;

const isNumeroPar = (numero % 2) === 0;
// % significa resto da divisão
// === é o símbolo de igual da matemática
// = é para atribuição
// == é para igualdade, mas ignora o tipo da varíavel (ex.: 0 em número e 0 em string)

if (numero === 0) {
    console.log('O número é inválido')
} else if (isNumeroPar) {
    console.log('É par');
} else {
    console.log('É impar');
}