import { calcLineItem } from './utils.js';

export function renderLineItem(cartItem, fruit) {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = fruit.name;
    nameTd.classList.add('align-left');

    const quantityTd = document.createElement('td');
    nameTd.textContent = cartItem.quantity;
    nameTd.classList.add('align-left');

    const priceTd = document.createElement('td');
    nameTd.textContent = fruit.price;

    const totalTd = document.createElement('td');
    const totalPrice = calcLineItem(fruit.price, cartItem.quantity);
    totalTd.textContent = totalPrice;
    totalTd.classList.add('Line-item-total');

    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);

    return tr;

}
// const ID
// const quantity
// const price
// const total quantity
// const total price