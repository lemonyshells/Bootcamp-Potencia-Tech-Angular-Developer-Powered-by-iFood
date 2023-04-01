/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura, e peça a José para dizer o valor do seu IMC.
*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(peso, altura) {
        return this.peso / (this.altura * this.altura)
    }

    classificarIMC() {
        const IMC = this.calcularIMC();
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
}

const Jose = new Pessoas('José', 70, 1.75);
console.log(Jose.classificarIMC())
const Yandra = new Pessoas('Yandra', 60, 1.55)
console.log(Yandra.classificarIMC())
