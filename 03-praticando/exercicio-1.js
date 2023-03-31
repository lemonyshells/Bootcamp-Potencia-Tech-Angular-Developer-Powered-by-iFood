/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificalçao conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5: reprovado;
- Média entre 5 e 7: recuperação;
- Média acima de 7: aprovado.

*/

// entrada do codigo

const nota1 = 7.5;
const nota2 = 10;
const nota3 = 8;

// calculo do codigo

const media = (nota1 + nota2 + nota3) / 3

// saida do codigo

console.log (media.toFixed(2))

if (media > 7) {
    console.log ('Aprovado')
} else if (media < 5) {
    console.log ('Reprovado')
} else {
    console.log ('Recuperação')
}