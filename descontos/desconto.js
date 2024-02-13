// Função para calcular o desconto
function calcularDesconto(idProduto) {
    // Elemento onde o resultado do desconto será exibido
    var elemento = document.querySelector('#produto-' + idProduto + ' .total-promo');

    // Valor original do produto
    var valorOriginal = parseFloat(document.querySelector('#produto-' + idProduto + ' .no-promo').textContent.replace('R$', ''));

    // Calcular desconto de 20%
    var desconto = 0.20;
    var valorComDesconto = valorOriginal - (valorOriginal * desconto);

    // Atualizar o HTML com o desconto
    elemento.textContent = "R$" + valorComDesconto.toFixed(2);
}

// Chamar a função calcularDesconto para cada produto assim que a página for carregada
document.addEventListener('DOMContentLoaded', function() {
    calcularDesconto(1);
    calcularDesconto(2);
});
