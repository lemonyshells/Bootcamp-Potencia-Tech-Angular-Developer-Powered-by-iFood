/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código de Condição de Pagamento:
- À vista no débito: recebe 10% de desconto;
- À vista no dinheiro ou PIX: recebe 15% de desconto;
- Em 2x, preço normal de etiqueta sem juros;
- Acima de 2x, preço normal de etiqueta acrescido de 10% de juros.
*/

// entrada do codigo

const precoEtiqueta = 100;
const descontoDebito = 0.90;
const descontoDinheiroPix = 0.85;
// const parcelaEm2 = 0;
const jurosParcela = 1.10;
const condicaoPgto = 'Dinheiro'

// calculos do codigo

if (condicaoPgto === 'Débito') {
    console.log(precoEtiqueta * descontoDebito);
} else if (condicaoPgto === 'Dinheiro') {
    console.log (precoEtiqueta * descontoDinheiroPix);
} else if (condicaoPgto === 'Pix') {
    console.log (precoEtiqueta * descontoDinheiroPix);
} else if (condicaoPgto === 'Parcelado em 2x') {
    console.log (precoEtiqueta * 1);
} else {
    console.log ((precoEtiqueta * jurosParcela).toFixed(2));
}
