// arrays = listas

/*const alunos = ['Aluno 1', 'Aluno 2', 'Aluno 3'] // a lista pode começar vazia e ir adicionando via push

alunos.push ('Aluno 4') // para adicionar um elemento na lista

console.log (alunos[2])*/

const notas = [];

notas.push(5);
notas.push(4);
notas.push(8);
notas.push(6);
notas.push(5);
notas.push(8);
notas.push(7);

let soma = 0;

// estrutura de repetição para percorrer a lista de forma dinâmica
// o for funciona para percorrer uma qtde X de vezes
/*
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}
const media = soma/notas.length
console.log(media);
*/
const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    if (numeroPar) {
        numerosPares.push(i);
    }
}

console.log(numerosPares);