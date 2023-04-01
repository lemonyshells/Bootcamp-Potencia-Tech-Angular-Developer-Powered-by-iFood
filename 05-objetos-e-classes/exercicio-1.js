/*
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
Crie um método que, dado a quantidade de KM e o preço do combustível, nos retorne o valor gasto em reais para realizar o percurso.
*/

class Carros {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGasto(distanciaKM, precoCombustivel) {
        return distanciaKM * this.gastoMedioPorKM * precoCombustivel;
    }
}

const Tiggo = new Carros('Cherry', 'Branco', 1 / 8);
console.log(Tiggo.calcularGasto(70, 5))
const Duster = new Carros('Renault', 'Cinza', 1 / 7);
console.log(Duster.calcularGasto(70, 5))
const Yaris = new Carros('Toyota', 'Branco', 1 / 10);
console.log(Yaris.calcularGasto(70, 5))

