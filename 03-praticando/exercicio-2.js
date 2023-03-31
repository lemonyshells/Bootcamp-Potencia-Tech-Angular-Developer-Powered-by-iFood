/*
Elabore um algoritmo que, dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

IMC em adultos:
- Abaixo de 18.5: abaixo do peso;
- Entre 18.5 e 25: peso normal;
- Entre 25 e 30: acima do peso;
- Entre 30 e 40: obeso;
- Acima de 40: obesidade grave.

Fórmula do IMC:
IMC = peso / (altura * altura)
*/

const peso = 50;
const altura = 1.60;
const IMC = peso / (altura * altura); 


if (IMC < 18.5) {
    console.log ('Seu IMC é:', IMC.toFixed(2),'-', 'Abaixo do Peso')
} else if (IMC > 18.5 & IMC < 25) {
    console.log ('Seu IMC é:', IMC.toFixed(2),'-', 'Peso Normal')
} else if (IMC > 25 & IMC < 30) {
    console.log ('Seu IMC é:', IMC.toFixed(2),'-', 'Acima do Peso')
} else if (IMC > 30 & IMC < 40) {
    console.log ('Seu IMC é:', IMC.toFixed(2),'-', 'Obeso')
} else {
    console.log ('Seu IMC é:', IMC.toFixed(2),'-', 'Obesidade Grave')
}
