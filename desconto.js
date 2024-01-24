    // #desconto

  // Função para processar a compra
 function calcularDesconto(produto, valorOriginal) {
    // Calcular desconto de 20%
    var desconto = 0.20;
    var valorComDesconto = valorOriginal - (valorOriginal * desconto);

    // Atualizar o conteúdo do span
    document.getElementById("total-promo").textContent = "R$" + valorComDesconto.toFixed(2);

    console.log("Desconto calculado para", produto, ": R$", valorComDesconto.toFixed(2));
  }
calcularDesconto('Kit de vasos decorativos', 139.90); 
