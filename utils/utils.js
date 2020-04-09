function findById(array, id) {

    let foundItem;
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item.id === id) {
            foundItem = item;
        }
    }
    return foundItem;
}

export default findById;

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function calcLineItem(quantity, price) {
    let calcLineItem = 0;

    const orderTotal = quantity * price;

    return roundCurrency(orderTotal);
}

export function calcOrderTotal(cart, fruit) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const fruits = findById(fruits, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, fruit.price);

        orderTotal += lineTotal;
    }

    return orderTotal;
}