/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código de Condição de Pagamento:
1 - À vista no débito: recebe 10% de desconto;
2 - À vista no dinheiro ou PIX: recebe 15% de desconto;
3 - Em 2x, preço normal de etiqueta sem juros;
4 - Acima de 2x, preço normal de etiqueta acrescido de 10% de juros.
*/


// resolucao independente

function calcularDesconto(metodoPagamento) {
    if (metodoPagamento === 1) {
        return 0.90
    } else if (metodoPagamento === 2) {
        return 0.85
    } else if (metodoPagamento === 3) {
        return 1
    } else {
        return 1.10
    }
}

function calcularPrecoFinal() {
    const precoProduto = 100;
    const precoFinal = (calcularDesconto(2) * precoProduto).toFixed(2);

    console.log(precoFinal)
}

calcularPrecoFinal()
