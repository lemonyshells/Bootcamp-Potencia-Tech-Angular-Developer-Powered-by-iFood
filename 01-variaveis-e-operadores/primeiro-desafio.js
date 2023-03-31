/*
Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:
- Preço do combustível por litro;
- Gasto médio de combustível do carro por KM;
- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

// entrada do código

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaViagem = 1580;

// calculo do codigo

let gastoCombustivel = (distanciaViagem / kmPorLitro) * precoCombustivel

// saida do codigo
// .toFixed(n) = para arredondar um número

console.log(gastoCombustivel.toFixed(2))