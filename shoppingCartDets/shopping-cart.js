import cart from './cartData.js';
import fruits from '../data.js';
import findById, { calcOrderTotal, toUSD } from '../utils/utils.js';
import { renderLineItem } from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

// for the cart
for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const fruit = findById(fruits, cartItem.id);
    const dom = renderLineItem(cartItem, fruit);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, fruits);
orderTotalCell.textContent = toUSD(orderTotal);