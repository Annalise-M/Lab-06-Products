import cart from "./cartData";
// imports to go up here

export default dataCart;

const tbody = document.querySelector('tbody');
const address = fruit.address;
const orderNowContainer = document.getElementById('order-now-container');

// going through the cart
for (let i = 0; i < cart.length; i++) {
    //cart items list
    const cartItem = cart[i];
    const exoticFruit = findById(exoticFruits, cartItem.id);
    const lineTotal = calcLineTotal(cartItem.quantity, exoticFruits.price);

    orderTotal += lineTotal;
    
    return; } {
    tbody.appendChild(dom);
};


const orderTotal = calcOrderTotal(cart, exoticFruits);
orderTotalCell.textContent = toUSD(orderTotal);