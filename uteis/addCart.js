let iconCart = document.querySelector('.icon-cart') //Pega o svg no html
let closeCart = document.querySelector('.close') //Adiciona o botão 'close' para fechar
let body = document.querySelector('body') // Pega o body
let listProductHTML = document.querySelector('.listProduct') //Pega a div de lista de produtos
let listCartHTML = document.querySelector('.listCart') //A lista de produtos que vão para o carirnho
let iconCartSpan = document.querySelector('.icon-cart span') //Atualiza o span do carrinho


let listProducts = []; //Cria-se um array para preencher com o JSON
let carts = []; // Cria-se um array para preencher o carrinho conforme o cliente escolhe o produto
// Faz o carrinho aparecer e sumir
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
}) // ==> Função de abrir para o svg

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
}) // ==> Função de fechar no botão close

// ######################################

// Adiciona no HTML com as propriedades do JSON (parte 2)
const addDatatoHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0) {
        listProducts.forEach(product => {
            let newProduct = document.createElement('div')
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <button class="addCart">Add Cart</button>
            `;
            listProductHTML.appendChild(newProduct);
        })
    } 
}
// Adiciona um evento de captar o clique quando clicam no botão
// de adicionar ao carrinho

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
//Quando clicado em cada produto, vai aparecer seu respectivo id
        let product_id = positionClick.parentElement.dataset.id 
        addToCart(product_id) //Adiciona o produto no carrinho
    }
})

const addToCart = (product_id) => {
    //Verifica se já há produtos no carrinho ou se já tem o mesmo
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id)
    if(carts.length <= 0) {
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    } else if (positionThisProductInCart < 0){
            carts.push({
                product_id: product_id,
                quantity: 1
            });
    }else {
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1
    }
    addCartToHTML();
    addCartToMemory(); //salvar na memória
}
// ###################

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
}
// Adiciona o carrinho no HTML

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(carts.length > 0){
        carts.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('cart-item');
            newCart.dataset.id = cart.product_id;
            let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id)
            let info = listProducts[positionProduct]
            newCart.innerHTML = `
            <div class="image">
            <img src="${info.image}" alt="">
        </div>
            <div class="name">
            ${info.name}
            </div>
            <div class="quantity">
                <span class="minus"><</span>
                <span>${cart.quantity}</span>
                <span class="plus">></span>
            </div>
            `;
            listCartHTML.appendChild(newCart)
        })
    }
    iconCartSpan.innerText = totalQuantity;
}
// ###############################

listCartHTML.addEventListener('click', (event) =>{
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantity(product_id, type);
    }
})
// #################
// Ajusta a quantidade pelas setas
const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0) {
        switch (type) {
            case 'plus':
                carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
                break;
        
            default:
                let valueChange = carts[positionItemInCart].quantity - 1;
                if(valueChange > 0){
                    carts[positionItemInCart].quantity = valueChange;
                }else{
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToMemory();
    addCartToHTML();
}
// #####################
// Parte do JSON para pegar os produtos cadastrados (parte 1)
const initApp = () => {
    // pegar dados
    fetch('produtos/products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDatatoHTML();
        //guarda itens do carrinho ao carregar página
        if(localStorage.getItem('cart')){
            carts = JSON.parse(localStorage.getItem('cart'))
            addCartToHTML();
        }
    }) 
}
initApp();