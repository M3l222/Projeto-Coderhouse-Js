let iconCart = document.querySelector('.iconCart');
let cart =  document.querySelector('.cart');
let container =  document.querySelector('.container');
let close =  document.querySelector('.close');
let body = document.querySelector('body') 

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
}) // ==> Função de abrir para o svg

close.addEventListener('click', () => {
    body.classList.toggle('showCart')
}) // ==> Função de fechar no botão close

let products = null; // => Vazio pra pegar os dados do JSON e colocar aqui

// ###########
// Pega os dados do JSON 
// ###########
fetch('produtos/products.json')
    .then(response => response.json())
    .then(data => {
        products  = data;
        addDatatoHTML();
}) 
// ##############################

// Coloca os dados no HTML
function addDatatoHTML () {

    // Remove do HTML
let listProductHTML = document.querySelector('.listProduct');
listProductHTML.innerHTML = '';
    // ##############################

    // Add os do JSON (novos) 
if(products != null){
    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = 
            `
        <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <button onclick="addCart(${product.id})">Add Cart</button>
            `;
            listProductHTML.appendChild(newProduct);
        });
    }   
}
// ##############################

let listCart = [];

// Pegar dados do cookie no carrinho 

function checkCart(){
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='));
    if(cookieValue){
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}
checkCart()

// ###############################

function addCart($idProduct){
    
    let productCopy = JSON.parse(JSON.stringify(products));
    
    // Se o produto não estiver no carrinho
    if(!listCart[$idProduct])
    {
        let dataProduct = productCopy.filter (
            product => product.id == $idProduct
        )[0];
    // Adiciona os produtos no carrinho
     listCart[$idProduct] = dataProduct;
     listCart[$idProduct].quantity = 1;
    } else {
        // Se já estiver no carrinho
        // É só mudar a quantidade
        listCart[$idProduct].quantity++;
    }
    // Salvar dados no cookie
    // Para salvar quando sair da página
    let timeSave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
    document.cookie = "listCart="+JSON.stringify(listCart)+"; "+timeSave+"; path=/;";
    
    // Atualizar o HTML do carrinho
    addCartToHTML();
}

addCartToHTML();
function addCartToHTML(){
    // Limpa o padrão
    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = '';

    let totalHTML = document.querySelector('.totalQuantity');
    let totalQuantity = 0;
    // Se já tem um produto no carrinho
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('cart-item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="content">
                        <div class="name">${product.name}</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${product.id}, '-')">-</button>
                        <span class="value">${product.quantity}</span>
                        <button onclick="changeQuantity(${product.id}, '+')">+</button>
                    </div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                console.log(totalQuantity)
            }
        })
    }
    totalHTML.innerText = totalQuantity; // Atualiza o span com a quantidade total
}

function changeQuantity($idProduct, $type){
    switch ($type) {
        case '+':
            listCart[$idProduct].quantity++;
            break;
        case '-':
            listCart[$idProduct].quantity--;

            // Se a quantidade for 0, retira do carrinho
            if(listCart[$idProduct].quantity <= 0){
                delete listCart[$idProduct];
            }
            break;
    
        default:
            break;
    }
    // Salva no cookie
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    // Recarrega o HTMl
    addCartToHTML();
}