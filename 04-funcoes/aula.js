/* 
Funcoes sao blocos de codigos que podem ser chamadas a qualquer momento com a sintaxe 

function nomeFuncao() {

}

para invocar a função, a maneira mais simples é chamar pelo nome, ex.: nomeFuncao();

*/

function sayMyName(name) {
    console.log('Your name is: ' + name);
}


sayMyName('Yandra')
sayMyName('Kiara')

function quadrado(valor) {
    return valor * valor;
}

console.log(quadrado(10))

function incrementarJuros(valor, percentualJuros) {
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(100, 10));

// codigo do programa principal

function main() {
    console.log('Programa Principal');
}

main();

// no JavaScript as funções podem ser manipuladas como valores