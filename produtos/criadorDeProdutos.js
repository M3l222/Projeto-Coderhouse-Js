    // ARRAY DOS PRODUTOS

     var criadorDeProdutos = [
    { name: "Puff de couro", image: "images/promocao-1.jpg" id: 1,},
    { name: "Puff com apoio", image: "images/promocao-2.jpg", id: 2,},
    { name: "Kit de vasos decorativos", image: "images/promocao-3.png", id: 3,}
];



    // GERAR SEÇÃO DE PRODUTOS
function geradorDeProdutosSection() {
    var listaDeProdutosElement = document.getElementById('product-list');

    //CRIAR HTML
    criadorDeProdutos.forEach(function(produto) {
       var produtoHTML = `
    <div class="products">
        <div class="img-box-two" id="${produto.id}">
            <img src="${produto.image}" alt="${produto.name}">
            <h2>${produto.name}</h2>
            <button class="forms-btn" onclick="addToCart('${produto.id}', '${produto.name}')" title="Fazer orçamento">Fazer orçamento</button>
        </div>
    </div>
`;
    
        // Adicionar o HTML dos produtos na lista 
        listaDeProdutosElement.innerHTML += produtoHTML;

    });
}

// CHAMA A FUNÇÃO
geradorDeProdutosSection();
