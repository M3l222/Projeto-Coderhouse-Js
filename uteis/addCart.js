// Quando clicar no icon, aparecer o carrinho

let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close_btn');

iconCart.addEventListener('click', () => {
	body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => {
	body.classList.toggle('showCart')
})