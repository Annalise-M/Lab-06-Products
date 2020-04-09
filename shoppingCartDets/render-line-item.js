

export function makeReadablePrice(price) {
    const readablePrice = `$${Number(price).toFixed(2)}`;
    
    return readablePrice;
}

export function renderLineItem(cartItem, fruit) {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = fruit.name;
    nameTd.classList.add('align-left');

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = makeReadablePrice(fruit.price);

    const totalTd = document.createElement('td');
    const totalPrice = (fruit.price * cartItem.quantity);
    totalTd.textContent = makeReadablePrice(totalPrice);
    // totalTd.classList.add('line-item-total');

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