var criadorDeVasos = [
    { name: "Vaso de porcelana Branco 1m", image: "images/vaso-id-1.png", id: 1, cor: "Branco", altura: "1m"},
    { name: "Vaso de porcelana Coral 40cm", image: "images/vaso-id-2.png", id: 2, cor: "Coral", altura:"40cm"},
    { name: "Vaso de porcelana Branco 20cm", image: "images/vaso-id-3.png", id: 3, cor: "Branco", altura:"20cm"},
    { name: "Vaso de porcelana Branco 25cm", image: "images/vaso-id-4.png", id: 4, cor: "Branco", altura:"25cm"},
    { name: "Vaso de porcelana Branco 80cm", image: "images/vaso-id-5.png", id: 5, cor: "Branco", altura:"80cm"},
    { name: "Vaso de porcelana Preto 35cm", image: "images/vaso-id-6.png", id: 6, cor: "Preto", altura:"35cm"},
    { name: "Vaso de porcelana Preto Manchado 15cm", image: "images/vaso-id-7.png", id: 7, cor: "Preto", altura:"15cm"},
    { name: "Vaso de porcelana Verde Musgo 10cm", image: "images/vaso-id-8.png", id: 8, cor: "Verde Musgo", altura:"10cm"},
    { name: "Vaso de porcelana Creme 70cm", image: "images/vaso-id-9.png", id: 9, cor: "Creme", altura:"70cm"},
    { name: "Vaso de porcelana Branco Deitado 20cm", image: "images/vaso-id-10.png", id: 10, cor: "Branco", altura:"20cm"},
];

function geradorDeVasosSection() {
    var listaDeProdutosElement = document.getElementById('vasos-list');

    //CRIAR HTML
    criadorDeVasos.forEach(function(produto) {

        var produtoHTML = `
            <div class="img-container" id="${produto.id}">
                <img src="${produto.image}" alt="${produto.name}">
                <h2>${produto.name}</h2>
                <a href="#" class="forms-btn" onclick="processarCompra('${produto.name}')" title="Entre em contato e faça o orçamento do produto">Fazer orçamento</a>
            </div>
          
        `;

        // Adicionar o HTML dos produtos na lista 
        listaDeProdutosElement.innerHTML += produtoHTML;
    });
}

// CHAMA A FUNÇÃO
geradorDeVasosSection();
