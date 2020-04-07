export default dataCart;
// imports to og up here

const tbody = document.querySelector('tbody');
const address = fruit.address;
const orderNowContainer = document.getElementById('order-now-container');

// going through the cart
for (let i = 0; i < cart.length; i++) {
    //cart items list
    const cartItem = cart[i];
    //renderFruit.js - pull fruit info + cartItem info
    const exoticFruit = findById(exoticFruits, cartItem.id);
    // table row
    const dom = renderTableRow(cartItem, exoticFruits);

    //
    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, exoticFruits);
orderTotalCell.textContent = toUSD(orderTotal);