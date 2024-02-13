    // ARRAY DOS PRODUTOS

     var criadorDeProdutos = [
    { name: "Puff de couro", image: "images/promocao-1.jpg", price: "89,90", id: 1, desconto: 0.10 },
    { name: "Puff com apoio", image: "images/promocao-2.jpg", price: "149,90", id: 2, desconto: 0.15 },
    { name: "Kit de vasos decorativos", image: "images/promocao-3.png", price: "109,99", id: 3, desconto: 0.20 }
];



    // GERAR SEÇÃO DE PRODUTOS
function geradorDeProdutosSection() {
    var listaDeProdutosElement = document.getElementById('product-list');

    //CRIAR HTML
    criadorDeProdutos.forEach(function(produto) {
        // Calcular o preço com desconto
        var precoOriginal = parseFloat(produto.price.replace(',', '.'));
        var precoComDesconto = precoOriginal * (1 - produto.desconto);
        var precoFormatado = precoComDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

        var produtoHTML = `
            <div class="img-box-two" id="${produto.id}">
                <img src="${produto.image}" alt="${produto.name}">
                <h2>${produto.name}</h2>
                <p class="no-promo">R$ ${produto.price}</p>
                <p class="promo">${precoFormatado}</p>
                <button class="forms-btn" onclick="processarCompra('${produto.name}')" title="Entre em contato e faça o orçamento do produto">Comprar</button>
            </div>
        `;
    
        // Adicionar o HTML dos produtos na lista 
        listaDeProdutosElement.innerHTML += produtoHTML;
    });
}

// CHAMA A FUNÇÃO
geradorDeProdutosSection();
