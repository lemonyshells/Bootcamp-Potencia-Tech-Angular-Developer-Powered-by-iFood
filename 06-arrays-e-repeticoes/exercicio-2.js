/* 
Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.
*/

const lista = [2, 8, 9, 13];

// resolucao propria

for (let i = 0; i < lista.length; i++) {
    const numero = lista[i];
    if (numero % 2 === 0) {
        console.log((numero));
    }
}
