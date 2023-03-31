/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

// entradas do codigo

/*1*/ const precoEtanol = 3;
/*2*/ const precoGasolina = 5;
/*3*/ const tipoCombustivel = 'Gasolina';
/*4*/ const kmPorLitroEtanol = 10;
/*4*/ const kmPorLitroGasolina = 8;
/*5*/ const kmViagem = 100;

// calculos do codigo

const gastoCombustivelEtanol = (kmViagem / kmPorLitroEtanol) * precoEtanol
const gastoCombustivelGasolina = (kmViagem / kmPorLitroGasolina) * precoGasolina

// saida do codigo

if (tipoCombustivel === 'Etanol') {
    console.log(gastoCombustivelEtanol.toFixed(2))
} else {
    console.log(gastoCombustivelGasolina.toFixed(2))
}