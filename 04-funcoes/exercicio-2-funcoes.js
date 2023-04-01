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

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

function classificarIMC(IMC) {
    if (IMC < 18.5) {
        return 'Abaixo do Peso';
    } else if (IMC >= 18.5 & IMC < 25) {
        return 'Peso Normal';
    } else if (IMC >= 25 & IMC < 30) {
        return 'Acima do Peso';
    } else if (IMC >= 30 & IMC < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

function main() {
    const peso = 50;
    const altura = 1.60;

    const IMC = calcularIMC(peso, altura);
    console.log(classificarIMC(IMC));
}

main()
