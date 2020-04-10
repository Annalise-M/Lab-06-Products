// import cart from './cartData.js';
import fruits from '../data.js';
import findById, { calcOrderTotal, toUSD } from '../utils/utils.js';
import { renderLineItem } from './render-line-item.js';

const placeOrderButton = document.querySelector('button');

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

const cartInLocalStorage = localStorage.getItem('CART');
let cart;

if (cartInLocalStorage) {
    cart = JSON.parse(cartInLocalStorage);
}
else {
    cart = [];
}
// for the cart
for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const fruit = findById(fruits, cartItem.id);
    const dom = renderLineItem(cartItem, fruit);

    tbody.appendChild(dom);
}
if (cart.length === 0) {
    placeOrderButton.disabled = true;
}

const orderTotal = calcOrderTotal(cart, fruits);
orderTotalCell.textContent = toUSD(orderTotal);