import cart from '../data/cart.js';
import fruits from '../data.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderTableRow from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

// for the cart
for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const fruit = findById(fruits, cartItem.id);
    const dom = renderTableRow(cartItem, fruit);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, fruits);
orderTotalCell.textContent = toUSD(orderTotal);