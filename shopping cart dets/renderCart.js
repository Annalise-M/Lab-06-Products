export default dataCart;
// imports to go up here

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
    
    return lineTotal
}
tbody.appendChild(dom);


const orderTotal = calcOrderTotal(cart, exoticFruits);
orderTotalCell.textContent = toUSD(orderTotal);